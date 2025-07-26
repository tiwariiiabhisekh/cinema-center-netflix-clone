import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import { useNavigate } from 'react-router-dom'



const Home = () => {

  const navigate = useNavigate();  //Navigation hook

  //Play button - Navigate to a featured movie
  const handlePlay = () => {
    // Use a popular movie ID (e.g., Avengers: Endgame = 299534)
    navigate('/player/69710');
  };

  //More Info - Scroll to movie sections
  const handleMoreInfo = () => {
    const moreCardsSection = document.querySelector('.more-cards');
    if (moreCardsSection) {
      moreCardsSection.scrollIntoView({ 
        behavior: 'smooth',
          block: 'start'
      });
    }
  };

  return (
    <div className='home'>
      <Navbar /> 
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn' onClick={handlePlay}><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn' onClick={handleMoreInfo}><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movie"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"}  category={"upcoming"} />
        <TitleCards title={"Top Picks for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  )
}
export default Home