import { BsGithub } from "react-icons/bs";
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";
function Header() {
  return (
<header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
  <div className="px-4">
    <div className="flex items-center justify-between">
      <div className="flex shrink-0">
        <Link to="/">
        <div className="flex items-center">
          <img className="h-7 w-auto" src={logo} alt="logo" />
          <span className="font-bold">QuickSum AI</span>
        </div>
        </Link>
      </div>
      <div className="text-gray-900 font-bold cursor-pointer">
        <Link to="/">
        <h3>
          Home
        </h3>
        </Link>
      </div>
      <div className="flex items-center justify-end gap-3">
      <button 
        className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
        <BsGithub />
        </button>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header
