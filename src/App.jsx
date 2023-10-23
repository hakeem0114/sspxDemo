//React Imports


//React Router Imports
import { 
  BrowserRouter as Router,
   Route,
    Routes,
     Outlet 
} from 'react-router-dom';


//Style Imports
import './App.css'
import './index.css'

//Page Imports
import Home from './pages/Home'
import CurrentNeeds from './pages/CurrentNeeds'
import Faq from './pages/Faq'
import Contact from './pages/Contact'

//Component Imports 
import Nav from './components/Nav'
import Footer from './components/Footer'


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
