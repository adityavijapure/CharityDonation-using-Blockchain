import React from 'react';
import Tumblr from '../assets/videoplayback.mp4';
import Tumblr1 from '../assets/videoplayback1.mp4';

const VideoSection = ({ videoSrc, isReversed,text }) => (
  <div className={`flex flex-col md:flex-row items-center justify-between my-8 px-4 md:px-14 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
    <video
      width="100%"
      className="md:w-1/2 hover:scale-105  transition-transform duration-300  rounded-lg shadow-lg"
      preload="auto"
      playsInline
      autoPlay
      loop
      muted
    >
      <source src={videoSrc} type="video/mp4" />
       video tag.
    </video>
    <div className="mt-6 md:mt-0 md:mx-8 text-2xl md:text-4xl font-semibold font-xyz uppercase text-center md:text-left">
      {text}
    </div>
  </div>
);

const CountPage = () => (
  <>
    <VideoSection videoSrc={Tumblr} text={"No one has ever become poor from giving."} />
    <VideoSection videoSrc={Tumblr1} isReversed text={"No one has ever become poor from giving."} />
  </>
);

export default CountPage;
