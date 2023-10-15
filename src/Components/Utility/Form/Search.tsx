import React from 'react'
import { FaSearch } from 'react-icons/fa'

interface props {
 placeholder: string
}

const Search = ({ placeholder }: props) => {
  return (
     <form className='form'>
      <FaSearch className='form_Icon' />
      <input type='text' placeholder={placeholder} className='form_input' />
      <button className='form_button'>Search</button>
     </form>
  )
}

export default Search;