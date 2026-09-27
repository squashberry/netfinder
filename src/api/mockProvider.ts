import { mockDetails,mockGenres,mockMovies } from '../data/mock';
import type { DiscoverFilters,HomeFeed,Movie,MovieDetails,MovieProvider } from '../types';
const delay=(ms=120)=>new Promise(r=>setTimeout(r,ms));
const sortMovies=(items:Movie[],sortBy?:DiscoverFilters['sortBy'])=>[...items].sort((a,b)=>{
  if(sortBy==='rating') return (b.rating??0)-(a.rating??0);
  if(sortBy==='newest') return (b.releaseDate??'').localeCompare(a.releaseDate??'');
  if(sortBy==='oldest') return (a.releaseDate??'').localeCompare(b.releaseDate??'');
  return (b.popularity??0)-(a.popularity??0);
});
const unique=(items:Movie[])=>[...new Map(items.map(x=>[x.id,x])).values()];
export class MockMovieProvider implements MovieProvider{
  async getHome():Promise<HomeFeed>{await delay();return{featured:mockMovies.slice(0,5),sections:[
    {id:'trending',title:'Trending Now',items:await this.getTrending()},
    {id:'popular',title:'Popular Movies',items:await this.getPopular()},
    {id:'now-playing',title:'Now Playing',items:await this.getNowPlaying()},
    {id:'upcoming',title:'Upcoming',items:await this.getUpcoming()},
    {id:'top-rated',title:'Top Rated',items:await this.getTopRated()},
    {id:'action',title:'Action',items:await this.getByGenre('1')},
    {id:'drama',title:'Drama',items:await this.getByGenre('7')},
    {id:'sci-fi',title:'Science Fiction',items:await this.getByGenre('12')}
  ]};}
  async getTrending(){await delay();return sortMovies(mockMovies).slice(0,10);}
  async getPopular(){await delay();return sortMovies(mockMovies).slice(2,12);}
  async getNowPlaying(){await delay();return mockMovies.filter(m=>(m.releaseDate??'')>='2026-01-01'&&(m.releaseDate??'')<='2026-12-31').slice(0,10);}
  async getUpcoming(){await delay();return mockMovies.filter(m=>(m.releaseDate??'')>'2026-09-27').slice(0,10);}
  async getTopRated(){await delay();return sortMovies(mockMovies,'rating').slice(0,10);}
  async getMovie(id:string):Promise<MovieDetails>{await delay();return mockDetails[id]??mockDetails.n01;}
  async search(query:string,mediaType:'movie'|'tv'|'all'='all'){await delay();const q=query.trim().toLowerCase();return mockMovies.filter(m=>(mediaType==='all'||m.mediaType===mediaType)&&[m.title,m.overview,...(m.genres?.map(g=>g.name)??[])].join(' ').toLowerCase().includes(q));}
  async getGenres(){await delay();return mockGenres;}
  async getByGenre(id:string){await delay();return mockMovies.filter(m=>m.genres?.some(g=>g.id===id));}
  async discover(filters:DiscoverFilters){await delay();let items=[...mockMovies];
    if(filters.genreId)items=items.filter(m=>m.genres?.some(g=>g.id===filters.genreId));
    if(filters.year)items=items.filter(m=>m.releaseDate?.startsWith(filters.year!));
    if(filters.minRating)items=items.filter(m=>(m.rating??0)>=filters.minRating!);
    if(filters.language)items=items.filter(m=>m.language===filters.language);
    if(filters.mediaType&&filters.mediaType!=='all')items=items.filter(m=>m.mediaType===filters.mediaType);
    return sortMovies(unique(items),filters.sortBy).slice(0,30);
  }
}
