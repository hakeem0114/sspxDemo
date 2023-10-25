/* eslint-disable no-unused-vars */

//React Imports
import { useState } from 'react';

//React Router Imports
import { Link } from 'react-router-dom';

//Azure Imports
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
// import { InteractionStatus } from "@azure/msal-browser"; 
// import { loginRequest, b2cPolicies } from '../authConfig';

//React Icons Imports
import { IoIosContact } from 'react-icons/io';
import { IoIosArrowDropdown } from 'react-icons/io';


export default function Nav() {

  //MSAL context values to signin/up
    const { instance, inProgress } = useMsal();
    let activeAccount;
    let userName;

    if (instance) {
        activeAccount = instance.getActiveAccount();
        
        if(activeAccount){
          // console.log("activeAccount:"+activeAccount)
          // console.log(activeAccount)
          // console.log(activeAccount.idTokenClaims)
          // console.log("name:"+activeAccount.idTokenClaims.given_name)
          userName = activeAccount.idTokenClaims.given_name
        }else{
          // console.log("active account DNE")
        }
    }

    const handleLoginRedirect = () => {
        // instance.loginRedirect(loginRequest).catch((error) => console.log(error));
        try{
          instance.loginRedirect()
        }
        catch(err){
          console.log(err)
        }
    };

    const handleLogoutRedirect = () => {
      try{
        instance.logoutRedirect();
      }
      catch(err){
        console.log(err)
      }
    };


    //Nav dropdown
    const [isDropDown,setDropDown]=useState(false)

    function handleClick(){
      setDropDown((prevDropDown)=>!prevDropDown)
    }

  return (
    <div className=' 
    w-full bg-white h-40 mt-5 border-b-[2px] border-b-gray-800 opacity-95 flex flex-col justify-between sticky z-55 top-0 text-gray-500  '>
      
      <div className=' 
        flex flex-col
        md:flex-row md:
         h-20  w-full justify-center items-center  lg:gap-10 lg:justify-evenly 
      '>
          <div className='md:flex'>
            <img className='md:w-2/3' src="https://sspx.gifts/cdn/shop/files/website-logo_720x.png?v=1614723367" alt="Donate: sspx.ca" />
          </div>

          {/* Dropdown on Mobile */}
          <div className='mr-auto transform transition duration-300 hover:scale-110 hover:cursor-pointer md:hidden' > 
                    <IoIosArrowDropdown onClick={handleClick} size={30}/> 
          </div>    

          <AuthenticatedTemplate>
            <div className='flex gap-2'>

                  <div className='transform duration-1000 flex  gap-2'>
                              <div className=' font-medium w-auto underline underline-offset-4 '>
                                  <p>{userName}</p>
                              </div>
                              <div className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-amber-600'> 
                                  <IoIosContact size={30}/> 
                              </div>
                  </div>


                  <div className='font-semibold text-black transform transition duration-300 hover:scale-110 hover:cursor-pointer'
                    onClick={handleLogoutRedirect}
                  >
                    Sign Out
                  </div>

            </div>
                        
          </AuthenticatedTemplate>

          <UnauthenticatedTemplate>
              <div className='flex'>
                  <div className='font-semibold text-black transform transition duration-300 hover:scale-110 hover:cursor-pointer'
                    onClick={handleLoginRedirect}
                  >
                    Sign In
                  </div>
              </div>   
          </UnauthenticatedTemplate>
      </div>

      <div className='hidden md:visible md:flex  mt-5 h-20 w-full justify-center items-center mx-auto '>
          <ul className="flex gap-20">
          
          <Link to='/'>
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer'
                >
                  Home
                </li>
            </Link>

           <Link to='/donations'>
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer'
                >
                  Donations
                </li>
            </Link>
            

            <Link to='/Faq'>
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer'
                >
                  Nav3
                </li>
            </Link>

            <Link to='/Contact'>
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer'
                >
                  Nav4
                </li>
            </Link>

            <Link to="https://sspx.ca/" target="_blank">
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer'
                >
                  SSPX.ca
                </li>
            </Link>
          </ul>
      </div>
      {isDropDown &&
                                    <ul className='visible absolute z-50 transform transition duration-300 hover:cursor-pointer
                                                      left-0 top-32 w-[30%] h-[320px] border-r border-r-gray-900 bg-sky-300  text-slate-950 rounded-br-full
                                                    flex items-center flex-col gap-7  
                                                    md:hidden 
                                                    ' >

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
              }  
    </div>
  )
}

