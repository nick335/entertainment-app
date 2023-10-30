// hooks/useYearFromDateString.ts

const useYearFromDateString = (dateStr: string): number | null => {
 const date = new Date(dateStr);
 const year = !isNaN(date.getTime()) ? date.getFullYear() : null;
 return year;
};

export default useYearFromDateString;
