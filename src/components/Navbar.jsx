// import logo from "../../src/assets/Mask group.svg"
// import logo from "../../assets/image 23.svg"
import logo from "../assets/Mask group.svg"

function Navbar() {
  return (
    

<nav className="bg-black border-gray-200 dark:bg-gray-900 text-white">
  <div className=" flex flex-wrap items-end justify-between  p-4">
    <div className="flex items-end gap-1">
        <img src={logo} className="h-8" alt="Logo" />
        <span className="self-center text-xl font-lightbold font-serif whitespace-nowrap ">Movies</span>
    </div>
    
    <div className="hidden w-full sm:block md:block md:w-auto lg:w-[50vw] lg:flex lg:justify-around" id="navbar-default">
      <ul className="font-medium flex flex-col p-3 text-[white] mx-3 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  md:dark:bg-gray-900">
        
        <li>
          <a href="/" className="block py-2 px-3 lg:mx-4 md:mx-0 rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
        </li>
        <li>
          <a href="/explore" className="block py-2 px-3 lg:mx-4 md:mx-0  rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Explore</a>
        </li>
        <li>
          <a href="/genre" className="block py-2 px-3 lg:mx-4 md:mx-0  rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Genre</a>
        </li>
        <li>
          <a href="/news" className="block py-2 px-3 lg:mx-4 md:mx-0  rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">News</a>
        </li>
        <li>
          <a href="/movies" className="block py-2 px-3 lg:mx-4 md:mx-0  rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Movies</a>
        </li>
        <li>
          <a href="/noPage" className="block py-2 px-3  lg:mx-4  md:mx-0  rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tv shows</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
