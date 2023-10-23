//React Imports
import { useEffect } from 'react';

//React Router Imports
import { 
  BrowserRouter as Router,
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
          <Route path="/donations" element={<Donations />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App


// //React Imports
// import { useEffect } from 'react';

// //React Router Imports
// import { 
//   BrowserRouter as Router,
//    Route,
//     Routes,
//      Outlet,
// } from 'react-router-dom';


// //Style Imports
// import './App.css'
// import './index.css'

// //Page Imports
// import Home from './pages/Home'
// import CurrentNeeds from './pages/CurrentNeeds'
// import Faq from './pages/Faq'
// import Contact from './pages/Contact'

// //Component Imports 
// import Nav from './components/Nav'
// import Footer from './components/Footer'
// import Product from './components/Product';

// //Azure Imports
// import { MsalProvider, useMsal } from '@azure/msal-react'; //MsalProvider Provider for context of useMsal() to give claims to <App/>
// import { EventType } from '@azure/msal-browser'; //Msal token events (success/fail)
// import { b2cPolicies, protectedResources } from './authConfig';
// import { compareIssuingPolicy } from './utils/claimUtils';


// function PageLayout() {
//   return (
//     <div>
//       <Nav />
//         <Outlet/>
//       <Footer />
//     </div>
//   );
// }

// function beginAuth(instance){

//       // useEffect(() => {
//           const callbackId = instance.addEventCallback((event) => {
//               if (
//                   (event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) &&
//                   event.payload.account
//               ) {
//                   /**
//                    * For the purpose of setting an active account for UI update, we want to consider only the auth
//                    * response resulting from SUSI flow. "tfp" claim in the id token tells us the policy (NOTE: legacy
//                    * policies may use "acr" instead of "tfp"). To learn more about B2C tokens, visit:
//                    * https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
//                    */
//                   if (compareIssuingPolicy(event.payload.idTokenClaims, b2cPolicies.names.editProfile)) {
//                       // retrieve the account from initial sing-in to the app
//                       const originalSignInAccount = instance
//                           .getAllAccounts()
//                           .find(
//                               (account) =>
//                                   account.idTokenClaims.oid === event.payload.idTokenClaims.oid &&
//                                   account.idTokenClaims.sub === event.payload.idTokenClaims.sub && 
//                                   compareIssuingPolicy(account.idTokenClaims, b2cPolicies.names.signUpSignIn)        
//                           );

//                       let signUpSignInFlowRequest = {
//                           authority: b2cPolicies.authorities.signUpSignIn.authority,
//                           account: originalSignInAccount,
//                       };

//                       // silently login again with the signUpSignIn policy
//                       instance.ssoSilent(signUpSignInFlowRequest);
//                   }

//                   /**
//                    * Below we are checking if the user is returning from the reset password flow.
//                    * If so, we will ask the user to reauthenticate with their new password.
//                    * If you do not want this behavior and prefer your users to stay signed in instead,
//                    * you can replace the code below with the same pattern used for handling the return from
//                    * profile edit flow
//                    */
//                   if (compareIssuingPolicy(event.payload.idTokenClaims, b2cPolicies.names.forgotPassword)) {
//                       let signUpSignInFlowRequest = {
//                           authority: b2cPolicies.authorities.signUpSignIn.authority,
//                           scopes: [
//                               ...protectedResources.apiTodoList.scopes.read,
//                               ...protectedResources.apiTodoList.scopes.write,
//                           ],
//                       };
//                       instance.loginRedirect(signUpSignInFlowRequest);
//                   }
//               }

//               if (event.eventType === EventType.LOGIN_FAILURE) {
//                   // Check for forgot password error
//                   // Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
//                   if (event.error && event.error.errorMessage.includes('AADB2C90118')) {
//                       const resetPasswordRequest = {
//                           authority: b2cPolicies.authorities.forgotPassword.authority,
//                           scopes: [],
//                       };
//                       instance.loginRedirect(resetPasswordRequest);
//                   }
//               }
//           });

//           return () => {
//               if (callbackId) {
//                   instance.removeEventCallback(callbackId);
//               }
//           };
//           // eslint-disable-next-line
//       // }, [instance]);
// }

// function App() {

//   // //PublicClientApplication instance, the list of accounts currently signed in
//   // const { instance } = useMsal(); 

//   // //If the auth instance changes, 
//   // useEffect(()=>{
//   //   beginAuth(instance) 
//   // },[instance])

//   const { instance } = useMsal(); // Retrieve the instance

//   useEffect(() => {
//     const callbackId = instance.addEventCallback((event) => {
//           if (
//               (event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) &&
//               event.payload.account
//           ) {
//               /**
//                * For the purpose of setting an active account for UI update, we want to consider only the auth
//                * response resulting from SUSI flow. "tfp" claim in the id token tells us the policy (NOTE: legacy
//                * policies may use "acr" instead of "tfp"). To learn more about B2C tokens, visit:
//                * https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
//                */
//               if (compareIssuingPolicy(event.payload.idTokenClaims, b2cPolicies.names.editProfile)) {
//                   // retrieve the account from initial sing-in to the app
//                   const originalSignInAccount = instance
//                       .getAllAccounts()
//                       .find(
//                           (account) =>
//                               account.idTokenClaims.oid === event.payload.idTokenClaims.oid &&
//                               account.idTokenClaims.sub === event.payload.idTokenClaims.sub && 
//                               compareIssuingPolicy(account.idTokenClaims, b2cPolicies.names.signUpSignIn)        
//                       );

//                   let signUpSignInFlowRequest = {
//                       authority: b2cPolicies.authorities.signUpSignIn.authority,
//                       account: originalSignInAccount,
//                   };

//                   // silently login again with the signUpSignIn policy
//                   instance.ssoSilent(signUpSignInFlowRequest);
//               }

//               /**
//                * Below we are checking if the user is returning from the reset password flow.
//                * If so, we will ask the user to reauthenticate with their new password.
//                * If you do not want this behavior and prefer your users to stay signed in instead,
//                * you can replace the code below with the same pattern used for handling the return from
//                * profile edit flow
//                */
//               if (compareIssuingPolicy(event.payload.idTokenClaims, b2cPolicies.names.forgotPassword)) {
//                   let signUpSignInFlowRequest = {
//                       authority: b2cPolicies.authorities.signUpSignIn.authority,
//                       scopes: [
//                           ...protectedResources.apiTodoList.scopes.read,
//                           ...protectedResources.apiTodoList.scopes.write,
//                       ],
//                   };
//                   instance.loginRedirect(signUpSignInFlowRequest);
//               }
//           }

//           if (event.eventType === EventType.LOGIN_FAILURE) {
//               // Check for forgot password error
//               // Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
//               if (event.error && event.error.errorMessage.includes('AADB2C90118')) {
//                   const resetPasswordRequest = {
//                       authority: b2cPolicies.authorities.forgotPassword.authority,
//                       scopes: [],
//                   };
//                   instance.loginRedirect(resetPasswordRequest);
//               }
//           }
//       });

//     return () => {
//       if (callbackId) {
//         instance.removeEventCallback(callbackId);
//       }
//     };
//   }, [instance]);

//   return (
//         <MsalProvider instance={instance}>
//           <Router>
//             <Routes>
//                 <Route
//                   path="/"
//                   element={<PageLayout />}
//                 >
//                     <Route index element={<Home />} />
//                     <Route path="/currentneeds" element={<CurrentNeeds />} />
//                     <Route path="/faq" element={<Faq />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/product/:id" element={<Product />} />
//                 </Route>
//               </Routes>
//           </Router>

//         </MsalProvider>
//   );
// }

// export default App
