export default function ViewMoreButton({ href, text = "View More" }) {
  return (
    <div className="flex justify-center pt-5">
      <a
        href={href}
        className="group px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-200 rounded-md text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 flex items-center gap-2"
      >
        {text}
        <svg 
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  )
}
