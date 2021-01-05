import React, { useEffect, useState } from 'react'
import { CardList } from "./components/card-list";
import { SearchBox } from "./components/search-box";
import './App.css';

function App() {
  const [cont, setCont] = useState([])
  const [search, setSearch] = useState("")

  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => setCont(user))
    .catch(err => console.error(err))

    return () => {}
  }, [])

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value)
  }

  const filterVal = cont.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox handleChange={handleChange} placeholder="search monster" value={search} />
      <CardList  lists={filterVal} />
    </div>
  );
}


export default App;
