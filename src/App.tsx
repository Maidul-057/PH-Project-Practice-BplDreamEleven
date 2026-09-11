import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/players/Players";

 const playerPromiseFetch=async()=>{
      const res = await fetch('/data.json')
      const data = await res.json()
      return data;}
function App() {
        const playersPromise = playerPromiseFetch();
    

  return (
   
    <> 
    <Nav />
    <Banner />
    <Suspense fallback={<div>Loading...</div>}>     
    <Players playersPromise={playersPromise}/>
      </Suspense>
  )
}

export default App
