'use client'
import { fetchedMovieData, fetchedTVData } from "@/types/content";

export default function getRandomItemsFromArray(arr: Array<fetchedTVData | fetchedMovieData>, numItems: number) {
 if (!arr || arr.length === 0) {
  // Handle the case where the input array is empty, return an appropriate value or throw an error.
  return [];
}

  const shuffledArray = [...arr];
  let n = shuffledArray.length;

  while (n) {
    const randomIndex = Math.floor(Math.random() * n--);
    [shuffledArray[n], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[n]];
  }

  return shuffledArray.slice(0, numItems);
}
