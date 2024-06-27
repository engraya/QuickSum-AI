import avatar from "../../public/avatar.png"

function Testmonials() {
  return (
<section className='my-10'>
  <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
    <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
      <div className="mb-12 space-y-5 md:mb-16 md:text-center">
        <h1 className="mb-5 text-3xl font-semibold text-gray-800 md:text-center md:text-5xl">
          It's not just us.
        </h1>
        <p className="text-xl text-gray-800 md:text-center md:text-2xl">
          Here's what others have to say about QuickSum AI.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      <ul className="space-y-8">
        <li className="text-sm leading-6">
          <div className="relative group">
            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-violet-600 to-emerald-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div>
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><img src={avatar} className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Sarah Johnson</h3>
                    <p className="text-gray-500 text-md">CEO of Creative Solutions Inc.</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">QuickSum AI has revolutionized the way I handle content research. The summaries are accurate and incredibly useful for my work.</p>
              </div>
          </div>
        </li>
        <li className="text-sm leading-6">
          <div className="relative group">
          <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-violet-600 to-emerald-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><img src={avatar} className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Maria Gonzalez</h3>
                    <p className="text-gray-500 text-md">Student at University of Knowledge</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">QuickSum AI is a lifesaver for my studies. It helps me get through academic papers quickly and efficiently.</p>
              </div>
            </a>
          </div>
        </li>
      </ul>
      <ul className="hidden space-y-8 sm:block">
        <li className="text-sm leading-6">
          <div className="relative group">
          <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-violet-600 to-emerald-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div>
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><img src={avatar} className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">David Lee</h3>
                    <p className="text-gray-500 text-md">CEO of Market Insights</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">This tool saves me so much time. I can quickly get the key points from multiple articles and focus on in-depth analysis.</p>
              </div>
          </div>
        </li>
        <li className="text-sm leading-6">
          <div className="relative group">
          <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-violet-600 to-emerald-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><img src={avatar} className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Michael Brown</h3>
                    <p className="text-gray-500 text-md">Digital Marketer at AdVance Marketing</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">QuickSum AI helps me stay updated with industry trends without spending hours reading articles. Highly recommend it.!</p>
              </div>
            </a>
          </div>
        </li>
      </ul>
      <ul className="hidden space-y-8 lg:block">
        <li className="text-sm leading-6">
          <div className="relative group">
          <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-violet-600 to-emerald-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/satyanadella" className="cursor-pointer">
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><img src={avatar} className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Emily Zhang</h3>
                    <p className="text-gray-500 text-md">Software Engineer at Tech Innovators</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">I love that QuickSum AI is open source. It's a fantastic tool that also allows me to contribute to its development.</p>
              </div>
            </a>
          </div>
        </li>
        <li className="text-sm leading-6">
          <div className="relative group">
          <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-violet-600 to-emerald-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/dan_schulman" className="cursor-pointer">
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><img src={avatar} className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">John Smith</h3>
                    <p className="text-gray-500 text-md">CEO of Self-Employed</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">As a writer, I often need to digest large amounts of information. QuickSum AI makes this task much more manageable.</p>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>

  )
}

export default Testmonials
