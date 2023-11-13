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

