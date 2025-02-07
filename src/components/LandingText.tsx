import { Link } from "react-router-dom"
function LandingText() {
  return (
    <div className="flex flex-1 w-full flex-col items-center mt-10 justify-center text-center px-4 py-20 to-green-50/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
    <h1 className="animate-typing bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent mx-auto max-w-4xl font-display text-3xl font-bold tracking-normal text-white-300 dark:text-gray-300 sm:text-7xl">
      Unlock the Power of Summaries with { " " }
      <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent relative whitespace-nowrap text-white-600 dark:text-gray-300"></span>
      <span className="relative whitespace-nowrap text-rose-500 dark:text-orange-300">
        <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-500 dark:fill-orange-300/60" preserveAspectRatio="none">
          <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z" />
        </svg>
        <span className="relative">QuickSum AI</span>
      </span>
    </h1>
    <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-white-400 text-cyan-900 dark:text-gray-300 leading-7">
    Experience the future of content consumption with our AI-powered summarization tool. Say goodbye to information overload. QuickSum AI leverages advanced natural language processing algorithms to distill lengthy articles into their essential points. Input a URL, and let our AI handle the rest.
    </h2>
    <Link to="/summarize">
    <button className="border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#288ee7,0_0_30px_#08f] animate-bounce focus:animate-none hover:animate-none px-8 py-4 mt-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
      Get Started 🚀
    </button>
    </Link>
  </div>
  
  )
}

export default LandingText
