import { CustomMovieProvider } from './customProvider';
import { MockMovieProvider } from './mockProvider';
import { MOVIE_PROVIDER } from './provider';
const customBase=import.meta.env.VITE_MOVIE_API_BASE_URL?.trim();
export const movieProvider=MOVIE_PROVIDER==='custom'&&customBase
  ? new CustomMovieProvider({baseUrl:customBase,apiKey:import.meta.env.VITE_MOVIE_API_KEY,imageBaseUrl:import.meta.env.VITE_IMAGE_BASE_URL})
  : new MockMovieProvider();
