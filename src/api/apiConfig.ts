import { header } from "@/types/apiconfig";

export const getHeaders = (): header => {
 return {
   accept: 'application/json',
   Authorization: process.env.API_READ_ACCESSTOKEN ? process.env.API_READ_ACCESSTOKEN : '',
 };
};