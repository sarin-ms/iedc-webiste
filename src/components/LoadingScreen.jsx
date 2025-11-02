import { useEffect, useState } from "react"

export default function LoadingScreen({ onLoadComplete }) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [startTime] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 150)

    const checkLoadComplete = () => {
      const elapsedTime = Date.now() - startTime
      const remainingTime = Math.max(0, 3000 - elapsedTime)
      
      setTimeout(() => {
        setProgress(100)
        setIsComplete(true)
        setTimeout(() => {
          onLoadComplete()
        }, 500)
      }, remainingTime)
    }

    if (document.readyState === 'complete') {
      checkLoadComplete()
    } else {
      window.addEventListener('load', checkLoadComplete)
    }

    return () => {
      clearInterval(interval)
      window.removeEventListener('load', checkLoadComplete)
    }
  }, [onLoadComplete, startTime])

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="relative">
          <h1 className="text-8xl md:text-10xl font-bold text-white mb-8 animate-pulse">
            IEDC
          </h1>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
