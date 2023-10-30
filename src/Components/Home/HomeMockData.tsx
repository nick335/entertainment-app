import { homesection } from "@/types/home";

export const MovieData: Array<homesection> = [
 {
  header: 'popular',
  type: 'movie',
  apiUrl: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
 },
 {
  header: 'now playing',
  type: 'movie',
  apiUrl: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
 },
 {
  header: 'upcoming',
  type: 'movie',
  apiUrl: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
 },
 {
  header: 'top rated',
  type: 'movie',
  apiUrl: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
 }
]
export const TvData: Array<homesection> = [
 {
  header: 'popular',
  type: 'TV Series',
  apiUrl: 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
 },
 {
  header: 'air today',
  type: 'TV Series',
  apiUrl: 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1'
 },
 {
  header: 'on air',
  type: 'tv series',
  apiUrl: 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1'
 },
 {
  header: 'top rated',
  type: 'TV Series',
  apiUrl: 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1'
 }
]