import { motion } from "motion/react"
import './App.css'
import ParticlesBackground from './Particals'

function App() {
  const handleRedirct = (url: string) => {
    window.location.href = url
  }

  return (
    <>
      <div className="">
        <ParticlesBackground />
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-screen content">
        <h2 className="text-2xl font-bold">Newbie Games</h2>
        <div className="flex flex-col items-center justify-between max-h-screen gap-4 border-3 rounded-2xl pt-4 pb-4 w-md">
            <motion.button animate={{y : [ 0, -5 ,0 ] }} transition={{duration:1, repeat: Infinity, repeatType: "loop", ease: "easeInOut"}} className="bg-red-500 text-primary-foreground w-sm rounded-md" onClick={() => handleRedirct("https://www.youtube.com/@newbie-games")}> youtube </motion.button>
            <motion.button animate={{y : [ 0, -5 ,0 ] }} transition={{duration:1, repeat: Infinity, repeatType: "loop", ease: "easeInOut"}} className="bg-green-500 text-primary-foreground w-sm rounded-md" onClick={() => handleRedirct("https://kick.com/newbiegames")}> kick </motion.button>
            <motion.button animate={{y : [ 0, -5 ,0 ] }} transition={{duration:1, repeat: Infinity, repeatType: "loop", ease: "easeInOut"}} className="bg-amber-500 text-primary-foreground w-sm rounded-md" onClick={() => handleRedirct("https://www.instagram.com/newbie.games123/")}> intstagram </motion.button>
            <motion.button animate={{y : [ 0, -5 ,0 ] }} transition={{duration:1, repeat: Infinity, repeatType: "loop", ease: "easeInOut"}} className="bg-primary text-primary-foreground w-sm rounded-md" onClick={() => handleRedirct("https://www.tiktok.com/@newbiegames10")}> tiktok </motion.button>
        </div>
      </div>
    </>

  )
}
export default App
