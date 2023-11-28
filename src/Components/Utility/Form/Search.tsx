'use client'
import { useRouter } from 'next/navigation'
import { useState, FormEvent, ChangeEvent } from 'react'
import { FaSearch } from 'react-icons/fa'

interface props {
 placeholder: string
 searchWhat?: 'movie' | 'tv' | 'multi'
}

const Search = ({ placeholder, searchWhat }: props) => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  const handleSearch = (event: FormEvent) => {
    event.preventDefault()
    if(searchWhat && searchWhat === 'multi'){
      router.push(`search/${search}?page=1`)
    }else{
      router.push(`${searchWhat}/search/${search}?page=1`)
    }
  }
  return (
     <form className='form' onSubmit={handleSearch}>
      <FaSearch className='form_Icon' />
      <input type='text' placeholder={placeholder} value={search} className='form_input' onChange={handleNameChange} />
      <button className='form_button' disabled={!search.trim()}>Search</button>
     </form>
  )
}

export default Search;