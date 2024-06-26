
function Footer() {
  return (
<footer className="flex flex-col space-y-6 justify-center m-10 mt-auto">
  <div className="flex justify-center space-x-5">
    <a href="https://facebook.com" className="transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="facebook"/>
    </a>
    <a href="https://linkedin.com" className="transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="linkedin"/>
    </a>
    <a href="https://instagram.com" className="transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="intagram"/>
    </a>
    <a href="https://twitter.com" className="transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="twitter"/>
    </a>
  </div>
  <p className="text-center text-gray-700 font-medium">© 2022 QuickSum AI. All rights reservered.</p>
</footer>

  )
}

export default Footer
