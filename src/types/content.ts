export type fetchedTVData ={
 backdrop_path: string,
 first_air_date: string,
 genre_ids: Array<number>,
 id: number,
 name: string
 origin_country: Array<string>
 original_language: string,
 original_name: string,
 overview: string,
 popularity: number,
 poster_path: string,
 vote_average: number,
 vote_count: number
}

export type fetchedMovieData ={
 backdrop_path: string,
 genre_ids: Array<number>,
 id: number,
 original_language: string,
 original_title: string,
 overview: string,
 popularity: number,
 poster_path: string,
 release_date: string,
 title: string,
 video: boolean,
 vote_average: number,
 vote_count: number
}

export type displayContent = {
 name: string,
 id: number,
 yearString: string,
 img: string,
 type: string,
}


export interface Genre {
 id: number;
 name: string;
}

export interface Cast {
 adult: boolean;
 gender: number;
 id: number;
 known_for_department: string;
 name: string;
 original_name: string;
 popularity: number;
 profile_path: string | null;
 cast_id: number;
 character: string;
 credit_id: string;
 order: number;
}

export interface Movie {
 adult: boolean;
 backdrop_path: string;
 budget: number;
 genres: Genre[];
 homepage: string;
 id: number;
 imdb_id: string;
 original_language: string;
 original_title: string;
 overview: string;
 popularity: number;
 poster_path: string;
 release_date: string;
 revenue: number;
 runtime: number;
 status: string;
 tagline: string;
 title: string;
 video: boolean;
 vote_average: number;
 vote_count: number;
 credits: {
  cast: Cast[]
 }
}
export interface TVShow {
 adult: boolean;
 backdrop_path: string;
 episode_run_time: number[]; // Assuming an array of episode run times
 first_air_date: string;
 genres: Genre[];
 homepage: string;
 id: number;
 in_production: boolean;
 languages: string[];
 last_air_date: string;
 name: string;
 number_of_episodes: number;
 number_of_seasons: number;
 origin_country: string[];
 original_language: string;
 original_name: string;
 overview: string;
 popularity: number;
 poster_path: string;
 status: string;
 tagline: string;
 type: string;
 vote_average: number;
 vote_count: number;
 credits: {
  cast: Cast[]
 }
}

