//React Router Imports
import { Link } from 'react-router-dom';


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
    w-full h-40 mt-5 border-b-[2px] border-b-gray-800 opacity-95 flex flex-col justify-between sticky z-50 top-0 text-gray-500  '>
      <div className=' h-20 w-full flex justify-between items-center mx-auto '>
        <div className='flex ml-9'>
          <img src="https://sspx.gifts/cdn/shop/files/website-logo_720x.png?v=1614723367" alt="Donate: sspx.ca" />
        </div>

        <div className='flex mr-9'>
          <div className='font-semibold text-black transform transition duration-300 hover:scale-110 hover:cursor-pointer '>
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
            
            <Link to='/CurrentNeeds'>
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-bodyGold'
                >
                  Current Needs
                </li>
            </Link>

            <Link to='/Faq'>
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-bodyGold'
                >
                  FAQ
                </li>
            </Link>

            <Link to='/Contact'>
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-bodyGold'
                >
                  Contact The Donation Team
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