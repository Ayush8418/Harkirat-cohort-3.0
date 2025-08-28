import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='*' element={<ErrorPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const Layout=()=>{
  return (
    <div>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> |
      <Link to="/contact">Contact</Link> |
      
      <Outlet/>

      <i>Footer @copiright2025 Ayush</i>
    </div>
  )
}

const HomePage = () => {
  return <div> Home page</div>;
}

const About = () => {
  return <div> About page</div>;
}

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div> Contact page
      <button onClick={()=>{navigate("/")}}>Home</button>
    </div>
  );
}

const ErrorPage=()=>{
  return(
    <h1>Wrong page</h1>
  )
}



export default App
