import { useEffect,useState } from 'react';
import type { DiscoverFilters,Movie,MovieDetails } from '../types';
import { movieProvider } from '../api';
export function useAsync<T>(loader:()=>Promise<T>,deps:unknown[]){
  const [data,setData]=useState<T>();const [loading,setLoading]=useState(true);const [error,setError]=useState<Error>();
  useEffect(()=>{let active=true;setLoading(true);setError(undefined);loader().then(v=>{if(active)setData(v)}).catch((e:unknown)=>{if(active)setError(e instanceof Error?e:new Error('Something went wrong.'))}).finally(()=>{if(active)setLoading(false)});return()=>{active=false}},deps);
  return {data,loading,error};
}
export const useHome=()=>useAsync(()=>movieProvider.getHome(),[]);
export const useGenres=()=>useAsync(()=>movieProvider.getGenres(),[]);
export const useMovie=(id:string)=>useAsync<MovieDetails>(()=>movieProvider.getMovie(id),[id]);
export const useGenreMovies=(id:string)=>useAsync<Movie[]>(()=>movieProvider.getByGenre(id),[id]);
export const useDiscover=(filters:DiscoverFilters)=>useAsync<Movie[]>(()=>movieProvider.discover(filters),[filters.genreId,filters.year,filters.minRating,filters.language,filters.mediaType,filters.sortBy]);
export const useSearch=(query:string,mediaType:'movie'|'tv'|'all'='all')=>useAsync<Movie[]>(()=>query.trim()?movieProvider.search(query,mediaType):Promise.resolve([]),[query,mediaType]);
