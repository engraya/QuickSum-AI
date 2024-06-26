import { useState, useEffect } from "react";
import copy from "../assets/copy.svg"
import linkIcon from "../assets/link.svg"
import loader from "../assets/loader.svg"
import tick from "../assets/tick.svg"
import { useLazyGetSummaryQuery } from "../service/article";
import { MdSummarize } from "react-icons/md";


function SummarizePage() {
    const [article, setArticle] = useState<ArticleDataType>({
        url: "",
        summary: "",
      });
      const [allArticles, setAllArticles] = useState([]);
      const [copied, setCopied] = useState("");
    
      // RTK lazy query
      const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
    
      // Load data from localStorage on mount
      useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(
          localStorage.getItem("articles")
        );
    
        if (articlesFromLocalStorage) {
          setAllArticles(articlesFromLocalStorage);
        }
      }, []);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const existingArticle = allArticles.find(
          (item) => item.url === article.url
        );
    
        if (existingArticle) return setArticle(existingArticle);
    
        const { data } = await getSummary({ articleUrl: article.url });
        if (data?.summary) {
          const newArticle = { ...article, summary: data.summary };
          const updatedAllArticles = [newArticle, ...allArticles];
    
          // update state and local storage
          setArticle(newArticle);
          setAllArticles(updatedAllArticles);
          localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
        }
      };
    
      // copy the url and toggle the icon for user feedback
      const handleCopy = (copyUrl) => {
        setCopied(copyUrl);
        navigator.clipboard.writeText(copyUrl);
        setTimeout(() => setCopied(false), 3000);
      };
    
      const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
          handleSubmit(e);
        }
      };
  return (
<div className="dark:bg-gray-800 min-h-screen w-full">
  <div className="dark:bg-transparent">
    <div className="mx-auto flex flex-col items-center py-6 sm:py-12">
      <div className="w-full lg:flex justify-center items-center flex-col mb-5 mt-12 sm:mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
          Let's not stress for <br />
          <span className="text-violet-800 dark:text-violet-500">Website</span>
          designs.
        </h1>
        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
          A Community build tailwind component library.
        </p>
      </div>
      <div className="relative w-full max-w-xl mx-auto bg-white rounded-full">
        <form
        className='relative flex justify-center items-center'       
        onSubmit={handleSubmit}>
        <input 
        placeholder="e.g. https://www............"
        type='url'
        value={article.url}
        onChange={(e) => setArticle({ ...article, url: e.target.value })}
        onKeyDown={handleKeyDown}
        required
        className="rounded-full w-full h-14 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200" type="text" name="query" id="query" />
        <button 
        type="submit" 
        className="absolute inline-flex items-center h-10 px-2 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-2 bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            <svg className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Go
        </button>
        </form>
    </div>

    </div>
{/* Browse History */}
<div className='historyDiv flex flex-col gap-1 max-h-60 overflow-y-auto'>
  {allArticles.reverse().map((item, index) => (
    <div
      key={`link-${index}`}
      onClick={() => setArticle(item)}
      className='link_card flex items-center p-2 border-b border-gray-200'
    >
      <div className='copy_btn mr-2' onClick={() => handleCopy(item.url)}>
        <img
          src={copied === item.url ? tick : copy}
          alt={copied === item.url ? "tick_icon" : "copy_icon"}
          className='w-4 h-4 object-contain'
        />
      </div>
      <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
        {item.url}
      </p>
    </div>
  ))}
</div>

{/* Display Result */}
<div className='resultDiv my-10 max-w-full flex justify-center items-center'>
  {isFetching ? (
    <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
  ) : error ? (
    <p className='font-inter font-bold text-black text-center'>
      Well, that wasn't supposed to happen...
      <br />
      <span className='font-satoshi font-normal text-gray-700'>
        {error?.data?.error}
      </span>
    </p>
  ) : (
    article.summary && (
      <div className='flex flex-col gap-3'>
        <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
          Article <span className='blue_gradient'>Summary</span>
        </h2>
        <div className='summary_box p-4 bg-gray-100 rounded-md'>
          <p className='font-inter font-medium text-sm text-gray-700'>
            {article.summary}
          </p>
        </div>
      </div>
    )
  )}
</div>

  </div>
</div>

  )
}

export default SummarizePage
