import React, { useState }from 'react';
import { useEffect } from 'react';
import './Home.css';

// IMPORT ASSETS
import Video from '../../assets/video1.mp4';
import Video2 from '../../assets/street.mp4';
import Video3 from '../../assets/waterfall.mp4';
import Video4 from '../../assets/snow.mp4';
import Video5 from '../../assets/elephant.mp4';



// Import Icons
import { AiOutlineSwapRight } from "react-icons/ai";

function Home() {
  const [backgroundVideo, setBackgroundVideo] = useState(Video);

  const handleVideoClick = (video) => {
    setBackgroundVideo(video);
  };


  return (
    <div className='Home'>
      <div className='videoBg'>
        <video src={backgroundVideo} loop autoPlay muted />
      </div>

      <div className='sectionText'>
        <h1>Unlock Your Travel Dreams With Us!</h1>
        <p>Discover the world's most adventurous nature; life is too short for a trip.</p>
        <button className='btn'>
          Get Started <AiOutlineSwapRight className='icon'/>
        </button>
      </div>

      <div className="popularPlace">
        <div className="content">
          <h3>Popular Places</h3>
          <div className='videos flex'>
            <video src={Video2} loop autoPlay muted onClick={() => handleVideoClick(Video2)} />
            <video src={Video3} loop autoPlay muted onClick={() => handleVideoClick(Video3)} />
            <video src={Video4} loop autoPlay muted onClick={() => handleVideoClick(Video4)} />
            <video src={Video5} loop autoPlay muted onClick={() => handleVideoClick(Video5)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
