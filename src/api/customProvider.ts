import type { DiscoverFilters,Genre,HomeFeed,Movie,MovieDetails,MovieProvider } from '../types';
type Json=Record<string,unknown>|unknown[];
export interface CustomProviderConfig{
  baseUrl:string;apiKey?:string;imageBaseUrl?:string;headers?:Record<string,string>;
  endpoints?:Partial<{trending:string;popular:string;nowPlaying:string;upcoming:string;topRated:string;genres:string;discover:string;search:string;movie:string;}>;
}
export class CustomMovieProvider implements MovieProvider{
  constructor(private readonly config:CustomProviderConfig){}
  private async get<T extends Json>(path:string,params:Record<string,string|number|undefined>={}):Promise<T>{
    const url=new URL(path.replace(/^\//,''),this.config.baseUrl.replace(/\/$/,'')+'/');
    Object.entries(params).forEach(([k,v])=>v!==undefined&&url.searchParams.set(k,String(v)));
    const headers={Accept:'application/json',...(this.config.headers??{})};
    if(this.config.apiKey)headers.Authorization='Bearer '+this.config.apiKey;
    const response=await fetch(url,{headers});
    if(!response.ok)throw new Error('Movie API request failed ('+response.status+')');
    return response.json() as Promise<T>;
  }
  private list(payload:Json):Movie[]{const source=Array.isArray(payload)?payload:(payload.results??payload.data??[]);return Array.isArray(source)?source as Movie[]:[];}
  async getTrending(){return this.list(await this.get(this.config.endpoints?.trending??'trending'));}
  async getPopular(){return this.list(await this.get(this.config.endpoints?.popular??'popular'));}
  async getNowPlaying(){return this.list(await this.get(this.config.endpoints?.nowPlaying??'now-playing'));}
  async getUpcoming(){return this.list(await this.get(this.config.endpoints?.upcoming??'upcoming'));}
  async getTopRated(){return this.list(await this.get(this.config.endpoints?.topRated??'top-rated'));}
  async getGenres(){const payload=await this.get<Json>(this.config.endpoints?.genres??'genres');const list=Array.isArray(payload)?payload:(payload.results??payload.data??[]);return(Array.isArray(list)?list:[]) as Genre[];}
  async getMovie(id:string){return await this.get<MovieDetails>((this.config.endpoints?.movie??'movie')+'/'+encodeURIComponent(id));}
  async search(query:string,mediaType:'movie'|'tv'|'all'='all'){return this.list(await this.get(this.config.endpoints?.search??'search',{q:query,mediaType}));}
  async getByGenre(id:string){return this.discover({genreId:id});}
  async discover(filters:DiscoverFilters){return this.list(await this.get(this.config.endpoints?.discover??'discover',filters as Record<string,string|number|undefined>));}
  async getHome():Promise<HomeFeed>{const [featured,trending,popular,nowPlaying,upcoming,topRated]=await Promise.all([this.getTrending(),this.getTrending(),this.getPopular(),this.getNowPlaying(),this.getUpcoming(),this.getTopRated()]);return{featured:featured.slice(0,5),sections:[
    {id:'trending',title:'Trending Now',items:trending},{id:'popular',title:'Popular Movies',items:popular},{id:'now-playing',title:'Now Playing',items:nowPlaying},{id:'upcoming',title:'Upcoming',items:upcoming},{id:'top-rated',title:'Top Rated',items:topRated}]};}
}
