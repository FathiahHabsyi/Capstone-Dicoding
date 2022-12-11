import React from 'react'

const SearchBar = () => {
  return (
    <div className='container'>
      <input className="search-input mx-auto" type="search" placeholder="Search jobs ..." aria-label="Search"/>
    </div>
  )
}

export default SearchBar