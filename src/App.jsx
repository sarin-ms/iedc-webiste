import { useState, useEffect } from "react"
import { Navbar } from "./components/navbar"
import { ScrollProgress } from "./components/ScrollProgress"
import LoadingScreen from "./components/LoadingScreen"
import Hero from "./sections/hero"
import About from "./sections/about"
import Events from "./sections/events"
import Blog from "./sections/blog"
import Footer from "./components/footer"
import TeamPage from "./pages/TeamPage"
import UpdatesPage from "./pages/UpdatesPage"
import EventsPage from "./pages/EventsPage"

function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'
  const isHomePage = pathname === '/' || pathname === ''
  const isTeamPage = pathname === '/execom' || pathname === '/execom/'
  const isUpdatesPage = pathname === '/updates' || pathname === '/updates/'
  const isEventsPage = pathname === '/events' || pathname === '/events/'
  
  const [isLoading, setIsLoading] = useState(() => {
    return isHomePage
  })

  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    if (!isLoading && isHomePage) {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }
  }, [isLoading, isHomePage])

  return (
    <div>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      {!isLoading && (
        <>
          <div className="animate-fadeInDown fixed top-0 left-0 right-0 z-100">
            <Navbar />
            <ScrollProgress />
          </div>
        </>
      )}
      {isTeamPage ? (
        <TeamPage />
      ) : isUpdatesPage ? (
        <UpdatesPage />
      ) : isEventsPage ? (
        <EventsPage />
      ) : (
        <>
          <Hero />
          <About />
          <Events />
          <Blog />
        </>
      )}
      <Footer />
    </div>
  )
}

export default App
