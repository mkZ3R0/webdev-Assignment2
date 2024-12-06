import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectsTable from './components/ProjectTable'
import MonthlySalesCard from './components/MonthlySalesCard'
import FooterContainer from './components/FooterContainer'
import Calendar from 'react-calendar'
import DropdownMenu from './components/DropdownMenu'
import CardContainer from './components/CardContainer'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <ProjectsTable />
      <MonthlySalesCard />
      <Calendar />
      <PieChart />
      <BarChart />
      <FooterContainer />
      <DropdownMenu />
      <CardContainer />
    </>
  )
}

export default App
