import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <div className="align-middle">
    <Navbar/>
    <Hero/>
    <HomeCards/>
    <JobListings/>
    </div>
  )
}

export default App
