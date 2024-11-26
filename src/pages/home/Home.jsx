import image1 from "../../assets/Rectangle 6.svg"
import image2 from "../../assets/image 23.svg"
import icon from "../../assets/Group.svg"
import icon2 from "../../assets/Rectangle.svg"
import Navbar from "../../components/Navbar"
// import Movies from "../movies/Movies"
import Explore from '../explore/Explore'
import { ImFire } from "react-icons/im";
import Discover from "../discover/Discover";
import '@fontsource/bebas-neue';
import '@fontsource/just-another-hand';
import { apiKey } from "../../redux/movie/movieApi"

function Home() {
  return (

    < div className=" w-full bg-red overflow-hidden">
      {<Navbar />}
      {/* heroes section */}
      <div className="flex flex-wrap gap-3 w-screen bg-black justify-around px-0 pb-[6rem]">
        <div className="flex flex-col justify-center gap-4  ">
          {/* content container */}
          <div className="flex flex-col mx-[2rem]">
            <h2 style={{fontFamily:'Bebas Neue'}} className= "font-normal text-[#FFFFFF] text-[4rem] sm:text-4xl md:text-4xl lg:text-[4rem]  text-nowrap leading-[1.3rem] sm:leading-[0.3rem] mt-[3rem]">FIND MOVIES</h2>
            <h1 style={{fontFamily:'Bebas Neue'}} className=" flex font-normal text-[#FFFFFF]  mt-1.5 lg:text-[6.4rem] md:text-[3rem] sm:text-[2rem] leading-[7.7rem] bg-gradient-to-r from-[#2203ff]  to-[#c40D60] bg-clip-text text-transparent  "> TV SHOWS AND  <span className="mx-3">MORE</span></h1>
          </div>
          <p className="font-normal font-[Inter] mt-7 lg:text-[1.38rem] md:text-[1.16rem]  sm:text-[1.06rem]  mx-7 lg:leading-[1.62rem] md:leading-4 sm:leading-2 text-[#CECECE] bg-black ">Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s, when an unknown printer took a galley <br /> of type and scrambled it to make a type specimen book.</p>
          <button className="w-[16.31rem] h-[4rem] rounded-[8.43px] border-[1.2px] text-white bg-black flex items-center justify-center gap-2 mx-7"><img src={icon} alt="" />Watch Tutorial</button>
        </div>
        {/* image container */}
        <div className="relative flex justify-center items-center lg:justify-center lg:items-start lg:w-1/2 mt-6 lg:mt-0  mx-[2rem] mb-4 ">
          <div className="w-[16.5rem] sm:w-[16.5rem] md:w-[20.5rem] lg:w-[29.5rem] h-[20rem] sm:h-[20rem] md:h-[32.7rem]  lg:h-[43.7rem]   ">
            <img src={image2} alt="Movie Poster 1" className="object-cover w-full h-full" />
          </div>
          <div className="absolute w-[16rem] lg:w-[23.4rem] h-[23rem] sm:h-[23rem] md:h-[29.8rem] lg:h-[35.8rem]  left-[-4rem] sm:left-[-4rem] md:left-[-5rem] lg:left-[4rem]  top-[7rem] sm:top-[6rem] md:top-[12rem] lg:top-[12rem] pl-9 border-hidden sm:border-hidden md:border-l-2 lg:border-l-2    border-gray-600 border-b-2 pb-[2rem] " >
            <img src={image1} alt="Movie Poster 2" className=" object-cover w-full h-full" />
          </div>
        </div>
      </div>
      {/* trending */}
      <div className="main ctr bg-black p-4">
        <div className="w-full flex items-center text-white text-2xl gap-2 p-2">
         <ImFire style={{color:'yellow'}} />
          <span>Trending</span>
          <hr className="flex-grow border-t-2 border-gray-600 ml-2" />
          <a href="/explore" className="px-2 font-normal text-xl text-gray-400">See More</a>
        </div>

   
  
        <Explore apiKey={apiKey}/>
       
      </div>

      <div className="main ctr bg-black p-4">
        <div className="w-full flex items-center text-white text-2xl gap-2 p-2">
          <span className="font-bold p-3 text-4xl">YOU MAY LIKE THIS</span>
          <hr className="flex-grow border-t-2 border-gray-600 ml-2" />
          <a href="/explore" className="px-2 font-normal text-xl text-gray-400">See More</a>
        </div>

   
  
        <Discover apiKey={apiKey}/>
       
      </div>
      
    </div>

  )
}

export default Home
