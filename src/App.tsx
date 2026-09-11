import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/players/players";

function App() {

     const playerPromise=async()=>{
      const res = await fetch('/data.json')
      const data = await res.json()
      return data;
     };

  return (
    <> 
    <Nav />
    <Banner />
    <Players playerPromise={playerPromise}/>
      </>
  )
}

export default App
