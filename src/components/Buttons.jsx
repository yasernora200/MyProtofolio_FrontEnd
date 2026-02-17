

const Buttons = () => {
  return (
<div className="flex gap-4 justify-center my-5">
 
  <a
    href="/assets/cv.pdf" 
    download
    className="
      border-2 border-[#c03fd7] text-[#c03fd7] font-semibold
      px-6 py-3 rounded-full
      hover:bg-primary2 hover:text-white
      transition-all duration-300 ease-in-out
      hover:scale-105
    "
  >
    Download CV
  </a>

  
  <button
    className="
      bg-gradient-to-r from-[#f06292] to-[#ab47bc]
      text-white font-semibold
      px-6 py-3 rounded-full shadow-lg
      transition-all duration-300 ease-in-out
      hover:scale-105 hover:shadow-xl
      active:scale-95
    "
  >
    Hire Me
  </button>
</div>
  )
}

export default Buttons
