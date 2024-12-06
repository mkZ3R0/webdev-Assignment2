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
import Map from './components/Map'
import ContactFormContainer from './components/ContactFormContainer'
import StatsCard from './components/StatsCard'
import LineChart from './components/LineChart'

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
      <DropdownMenu />
      <PieChart />
      <BarChart />
      <LineChart />
      <FooterContainer />
      <CardContainer />
      <Map />
      <ContactFormContainer />
      <StatsCard />
    </>
  )
}

export default App
