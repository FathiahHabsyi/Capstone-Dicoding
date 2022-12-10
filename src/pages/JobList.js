import React from 'react'
import CardJobs from '../components/CardJobs'
import Footer from '../components/Footer'
import HeaderApp from '../components/HeaderApp'
import SearchBar from '../components/SearchBar'

const JobList = () => {
  return (
    
    <div>
      <HeaderApp/>
      <SearchBar/>
      <CardJobs/>
      <Footer/>
    </div>
  )
}

export default JobList