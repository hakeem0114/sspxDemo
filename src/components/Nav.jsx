//React Router Imports
import { Link } from 'react-router-dom';

//Azure Imports


export default function Nav() {


  //MSAL
  // const handleLoginRedirect = () => {
  //   instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  // };
  // const handleLogoutRedirect = () => {
  //   instance.logoutRedirect();
  // };

  //Use authentiatetemplate to change sign/sign out based on auth.

  return (
    <div className=' 
    w-full bg-white h-40 mt-5 border-b-[2px] border-b-gray-800 opacity-95 flex flex-col justify-between sticky z-50 top-0 text-gray-500  '>
      
      <div className=' h-20  w-full flex justify-evenly items-center  gap-32 '>
        <div className='flex'>
          <img className='w-2/3' src="https://sspx.gifts/cdn/shop/files/website-logo_720x.png?v=1614723367" alt="Donate: sspx.ca" />
        </div>

        <div className='flex'>
          <div
          
          className='font-semibold text-black transform transition duration-300 hover:scale-110 hover:cursor-pointer '>
             Sign In
          </div>
        </div>
      </div>

      <div className='mt-5 h-20 w-full flex justify-center items-center mx-auto '>
          <ul className="flex flex-row  gap-20">
          
          <Link to='/'>
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-bodyGold'
                >
                  Home
                </li>
            </Link>

           <Link to='/donations'>
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-bodyGold'
                >
                  Donations
                </li>
            </Link>
            

            <Link to='/Faq'>
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-bodyGold'
                >
                  Nav3
                </li>
            </Link>

            <Link to='/Contact'>
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-bodyGold'
                >
                  Nav4
                </li>
            </Link>

            <Link to="https://sspx.ca/" target="_blank">
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-bodyGold'
                >
                  SSPX.ca
                </li>
            </Link>
                

              
          </ul>
      </div>
    </div>
  )
}

// //React Router Imports
// import { Link } from 'react-router-dom';

// //Azure Imports
// import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
// import { loginRequest} from '../authConfig';


// export default function Nav() {

//   //Handle MSAL to sign/out
//   const { instance} = useMsal();

//   const handleLoginRedirect = () => {
//       instance.loginRedirect(loginRequest).catch((error) => console.log(error));
//   };

//   const handleLogoutRedirect = () => {
//       instance.logoutRedirect();
//   };


//   return (
//     <div className=' 
//     w-full bg-white h-40 mt-5 border-b-[2px] border-b-gray-800 opacity-95 flex flex-col justify-between sticky z-50 top-0 text-gray-500  '>
      
//       <div className=' h-20  w-full flex justify-evenly items-center  gap-32 '>
//         <div className='flex'>
//           <img className='w-2/3' src="https://sspx.gifts/cdn/shop/files/website-logo_720x.png?v=1614723367" alt="Donate: sspx.ca" />
//         </div>

//         <div className='flex'>
//           <div className='font-semibold text-black transform transition duration-300 hover:scale-110 hover:cursor-pointer '>
//              {/* <AuthenticatedTemplate onClick={handleLogoutRedirect}>
//                 Sign In
//              </AuthenticatedTemplate>

//              <UnauthenticatedTemplate onClick={handleLoginRedirect}>
//                 Sign Out
//              </UnauthenticatedTemplate> */}
//           </div>
//         </div>
//       </div>

//       <div className='mt-5 h-20 w-full flex justify-center items-center mx-auto '>
//           <ul className="flex flex-row  gap-20">

//            <Link to='/'>
//                 <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  '
//                 >
//                   Home
//                 </li>
//             </Link>
            
//             <Link to='/CurrentNeeds'>
//                 <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  '
//                 >
//                   Current Needs
//                 </li>
//             </Link>

//             <Link to='/Faq'>
//                 <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  '
//                 >
//                   FAQ
//                 </li>
//             </Link>

//             <Link to='/Contact'>
//                 <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  '
//                 >
//                   Contact The Donation Team
//                 </li>
//             </Link>

//             <Link to="https://sspx.ca/" target="_blank">
//                 <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  '
//                 >
//                   SSPX.ca
//                 </li>
//             </Link>
                

              
//           </ul>
//       </div>
//     </div>
//   )
// }