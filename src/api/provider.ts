import type { MovieProvider } from '../types';
export const MOVIE_PROVIDER=(import.meta.env.VITE_MOVIE_API_PROVIDER ?? 'mock').toLowerCase();
export function assertMovieProvider(provider:MovieProvider):MovieProvider{return provider;}
