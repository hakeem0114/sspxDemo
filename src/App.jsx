//React Imports
import { useState } from 'react'

//React Router Imports
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   Outlet,
// } from 'react-router-dom';
import { 
  BrowserRouter as Router,
   Route,
    Routes,
     Outlet 
} from 'react-router-dom';


//Style Imports
import './App.css'

//Page Imports
import Home from './pages/Home'
import CurrentNeeds from './pages/CurrentNeeds'
import Faq from './pages/Faq'
import Contact from './pages/Contact'

//Component Imports 
import Nav from './components/Nav'
import Footer from './components/Footer'


// function App() {

//   return (
//     <>

//       <h1 className="text-cyan-400  text-3xl font-bold underline">
//         Hello world!
//       </h1>

//     </>
//   )
// }

function PageLayout() {
  return (
    <div>
      <Nav />
       <Outlet/>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<PageLayout />}
        >
          <Route index element={<Home />} />
          <Route path="/current-needs" element={<CurrentNeeds />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
