import Banner from "./components/Banner"
import Nav from "./components/Nav"

function App() {

     const playerPromise=async()=>{
      const res = await fetch('/data.json')

  return (
    <> 
    <Nav />
    <Banner />
      </>
  )
}

export default App
