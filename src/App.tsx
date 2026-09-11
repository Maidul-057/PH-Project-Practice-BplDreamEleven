import logo from './assets/logo.png'
function App() {


  return (
    <> 
    <nav className="flex justify-between" > 
      <img src={logo} alt="logo" />
      <ul className="flex gap-5 items-center">
        <li>Home</li>
        <li>Fixtures</li>
        <li>Player</li>
        <li>Schedule</li>
      </ul>
    </nav>
      </>
  )
}

export default App
