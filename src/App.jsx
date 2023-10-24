/* eslint-disable no-unused-vars */

//React Imports
import { useEffect } from 'react';

//React Router Imports
import { 
   Route,
    Routes,
     Outlet,
} from 'react-router-dom';


//Style Imports
import './App.css'
import './index.css'

//Page Imports
import Donations from './pages/Donations'
import Home from './pages/Home'
import Faq from './pages/Faq'
import Contact from './pages/Contact'

//Component Imports 
import Nav from './components/Nav'
import Footer from './components/Footer'
import Product from './components/Product';

//Azure Imports
import { MsalProvider, useMsal } from '@azure/msal-react';
  //Protected Routes (future use)
  //https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/tree/main/3-Authorization-II/2-call-api-b2c
    import { b2cPolicies, protectedResources } from './authConfig';
    import { compareIssuingPolicy } from './utils/claimUtils';
    import { EventType } from '@azure/msal-browser';


function PageLayout() {
  return (
    <div>
      <Nav />
      <Outlet/>
      <Footer />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function App({instance}) {
  
  return (
    <MsalProvider instance={instance}>
      
        <Routes>
          
            <Route
              path="/"
              element={<PageLayout />}
            >
                <Route index element={<Home />} />
                <Route path="/donations" element={<Donations />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<Product />} />
            </Route>

        </Routes>

    </MsalProvider>
  );
}

export default App;
