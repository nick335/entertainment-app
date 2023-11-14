import { MovieData, TvData } from "@/Components/Home/HomeMockData";
import HomeSection from "@/Components/Home/HomeSection";
import TrendingMovies from "@/Components/Home/TrendingMovies";
import Search from "@/Components/Utility/Form/Search";


export default function Home() {
  const data  = [
    {
      header: 'popular',
      type: 'movie'
    }
  ]
  return (
    <main className='home'>
      <Search placeholder="Search for movies or TV series" />
      {/* <TrendingMovies /> */}
      { MovieData.map((each, idx) => {
        return <HomeSection 
                  key={idx}
                  header={each.header}
                  type={each.type}
                  apiUrl={each.apiUrl}
                  seemore={each.seemore}
                />
      }) }
      { TvData.map((each, idx) => {
        return <HomeSection 
                  key={idx}
                  header={each.header}
                  type={each.type}
                  apiUrl={each.apiUrl}
                  seemore={each.seemore}
                />
      }) }
    </main>
  )
}
