//React Router Imports 
import { Link } from "react-router-dom"

//Data Imports
import apostolatesData from "./pageData/apostolates"



export default function Donations (){
  return (
    <div className="w-full flex flex-col justify-center mb-10">
      
      {/* <div className="mt-10 mb-10 pb-10 border-b-2 border-slate-200 flex justify-center">
        <img className=" w-3/4" src="https://sspx.gifts/cdn/shop/files/SupportOurPriests_1296x.jpg?v=1614745341" alt="Donations image" />
      </div> */}

      <div className="w-3/4 mt-5 flex flex-col justify-center items-center mx-auto mb-10">
        <div className="font-bold text-2xl flex mr-auto ml-5 mb-10">
          Our Apostolates
        </div>

        <div className="grid justify-self-center self-center grid-cols-1 md:grid-cols-3 gap-5 ">
          {
            apostolatesData.map(apostolate => (
              <Link to={`/product/${apostolate.id}`} key={apostolate.id}>
                  <div  className="w-full cursor-pointer">
                      <div className="overflow-hidden">
                        <img src={apostolate.image} alt={apostolate.title} className="w-full  hover:scale-110 duration-500" />
                      </div>
                      
                      <h3 className="text-slate-600 text-center ">{apostolate.title}</h3>
                  </div>
              </Link>
            ))

           }
        </div>

        <div className="mt-10 mb-10 pt-10 border-t-2 border-slate-200 flex flex-col  gap-5">
           <h2 className="font-bold text-2xl">Your gift goes a long way...</h2>
           <p className="">Please help the SSPX continue the fight for Tradition! Because of your generosity, we are able to spread the Traditional Mass and sacraments by opening new chapels and schools across the Canada District and around the world. Thank you!  </p>
        </div>


      </div>

    </div>
  )
}
