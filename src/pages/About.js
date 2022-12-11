import React from 'react'
import Navbar from '../components/NavbarHome'

const About = () => {
  return (
    <>
    <Navbar/>
    <section className="category-banner p-2">
        <div className="container"> 
          <div className="d-flex align-items-center justify-content-evenly fw-bold">
            <h1>About</h1>
          </div>
        </div>
      </section>
      <div className='container my-5 about-text'>
        <p>Pada era ini hampir seluruh aspek kehidupan manusia telah digantikan oleh hadirnya teknologi. Sudah pasti developer Indonesia dan permintaan pasar yang semakin kompetitif membutuhkan banyak talenta - talenta digital yang berstandar global. Tetapi di Indonesia masih kurang sekali talenta yang mengerti teknologi. Salah satu alasan mengapa permintaan pasar tidak terpenuhi yaitu sebagian talenta sudah terikat kontrak dengan perusahaan tertentu jadi tidak dapat memenuhi permintaan pasar lainnya. Maka dari itu, saya dan tim bekerjasama membuat proyek bernama FetchWork yang berguna untuk para masyarakat yang memiliki talenta dalam bidang teknologi di Indonesia dapat mendukung transformasi digital dan pertumbuhan ekonomi di Indonesia dengan waktu bekerja yang fleksibel tanpa terikat kontrak.</p>
      </div>
   </>
  )
}

export default About