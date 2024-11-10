import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectsTable from './components/ProjectTable'
import MonthlySalesCard from './components/MonthlySalesCard'
import FooterContainer from './components/FooterContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <ProjectsTable/>
    <MonthlySalesCard />
    <FooterContainer/>
    </>
  )
}

export default App
