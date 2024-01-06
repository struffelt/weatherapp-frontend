import { useState } from 'react'
import './App.css'
import Searchbar from './components/Searchbar'

function App() {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Searchbar search={search} setSearch={setSearch}/>
    </>
  )
}

export default App
