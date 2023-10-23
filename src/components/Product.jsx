//React Router Imports
import { useParams } from "react-router-dom" //Get card details based on id

//Data Imports
import apostolatesData from "../pages/pageData/apostolates";
import { useState } from "react";

export default function Product(){

  //Get clicked product id
  let {id} = useParams(); 
  id = Number(id); // Since id in apostolate arr is an int vs id in use Params being a string

  //Find product based on id
  const clickedProduct = apostolatesData.find((apostolate)=>apostolate.id === id)

  //Open Zeffy Form when button is clicked
  const [donateZeffy, setDonateZeffy] = useState(false)

    return (
      <div className="w-full flex flex-col justify-center items-center">
        <div className=" w-2/3 mt-7 mb-7 ">
            
            <div className="flex flex-col justify-center items-center w-full">
              <h2 className="mb-5 capitalize font-semibold text-3xl">{clickedProduct.title}</h2>
              <img className="shadow-lg shadow-slate-500 w-2/3" src={clickedProduct.image} alt="Product Image" />
            </div>

            <div className="flex justify-center">
              {
                donateZeffy?(
                   <iframe 
                        src="https://www.zeffy.com/en-CA/embed/donation-form/9b22bfe9-a315-4f77-be74-fb592a753155"
                        title="Zeffy Donation Form"
                        width="100%"
                        height="600px"
                    ></iframe>
                ):(
                  <a className="mt-8 inline-flex items-center justify-center rounded-xl bg-slate-600 py-3 px-6 font-dm 
                  text-base font-medium text-white shadow-lg shadow-slate-400 transition-transform duration-200 
                  ease-in-out hover:scale-[1.02] hover:cursor-pointer"
                    onClick={()=>setDonateZeffy(true)}>
                    Donate Now
                  </a>
                )
              }
   
            </div>
        </div>

        <div className=" w-2/4 text-xs mb-7 "> 
          <p>
            This fund helps offset the operating expenses associated with providing for the Priory of St. Cesaire at St. Joseph Centre.
            St. Cesaire is the home of the District Superior who lives in community with four other priests.  St. Cesaire is also the home of four Oblate Sisters who assist the priests and live in community as well.
            St. Cesaire is a Mass Centre where the Holy Sacrifice of the Mass is offered by the Priests and where the faithful benefit from the regular reception of sacraments.
            By donating to this fund you are helping the Priory to pay its operating expenses in caring and providing for the Priests and Oblates and others who are dependent on the Community.  You are also helping to pay the bills for the utilities and routine maintenance of this beautiful and historic building.
            You are also supporting the costs associated with the Apostolate of the Priests who bring the sacraments currently to Churches in Montreal, Sherbrooke and Brinston as well as to the Maritime provinces.
          </p>
        </div>

      </div>
    )
  }
  