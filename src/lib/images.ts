import type { Movie, Person } from '../types';

const envBase = import.meta.env.VITE_IMAGE_BASE_URL?.trim();
const normalize = (value?: string) => {
  if (!value) return undefined;
  if (/^(https?:|data:|blob:)/.test(value)) return value;
  if (!envBase) return undefined;
  return envBase.replace(/\/$/, '') + '/' + value.replace(/^\//, '');
};
export function getPosterUrl(movie: Pick<Movie,'posterPath'>): string|undefined { return normalize(movie.posterPath); }
export function getBackdropUrl(movie: Pick<Movie,'backdropPath'>): string|undefined { return normalize(movie.backdropPath); }
export function getProfileImageUrl(person: Pick<Person,'image'>): string|undefined { return normalize(person.image); }
