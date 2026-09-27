export type MediaType = 'movie' | 'tv';

export interface Genre { id: string; name: string; }
export interface Person { id: string; name: string; image?: string; }
export interface CastMember extends Person { character?: string; }
export interface CrewMember extends Person { job?: string; }
export interface Review { id: string; author: string; rating?: number; content: string; createdAt?: string; }

export interface Movie {
  id: string; title: string; overview?: string; posterPath?: string; backdropPath?: string;
  releaseDate?: string; rating?: number; voteCount?: number; popularity?: number;
  genres?: Genre[]; runtime?: number; mediaType?: MediaType; language?: string; ageRating?: string;
}

export interface MovieDetails extends Movie {
  originalTitle?: string; cast?: CastMember[]; crew?: CrewMember[]; reviews?: Review[];
  similar?: Movie[]; recommendations?: Movie[]; productionCountries?: string[]; studios?: string[];
  budget?: number; revenue?: number; collection?: string; trailerUrl?: string;
}
export interface HomeFeed { featured: Movie[]; sections: { id:string; title:string; items:Movie[] }[]; }
export interface DiscoverFilters {
  genreId?: string; year?: string; minRating?: number; language?: string;
  mediaType?: MediaType | 'all'; sortBy?: 'popularity'|'rating'|'newest'|'oldest'; page?: number;
}
export interface MovieProvider {
  getHome(): Promise<HomeFeed>; getTrending(): Promise<Movie[]>; getPopular(): Promise<Movie[]>;
  getNowPlaying(): Promise<Movie[]>; getUpcoming(): Promise<Movie[]>; getTopRated(): Promise<Movie[]>;
  getMovie(id:string): Promise<MovieDetails>; search(query:string,mediaType?:MediaType|'all'): Promise<Movie[]>;
  getGenres(): Promise<Genre[]>; getByGenre(id:string): Promise<Movie[]>; discover(filters:DiscoverFilters): Promise<Movie[]>;
}
export interface WatchlistEntry { movieId:string; title:string; posterPath?:string; mediaType:MediaType; addedAt:number; }
export interface HistoryEntry extends WatchlistEntry { viewedAt:number; }
