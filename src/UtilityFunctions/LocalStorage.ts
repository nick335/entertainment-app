// localStorage.ts

export const getLocalStorageItem = <T>(key: string) => {
 if (typeof window !== 'undefined') {
   const item = window.localStorage.getItem(key);
   return item ? JSON.parse(item) : null;
 }
 return null;
};

export const setLocalStorageItem = <T>(key: string, value: T) => {
 if (typeof window !== 'undefined') {
   window.localStorage.setItem(key, JSON.stringify(value));
 }
};

