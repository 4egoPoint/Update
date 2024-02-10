

import { IoIosInformationCircle } from "react-icons/io";
import "./tasklist.scss"
import Radio from "./components/Radio";

const radioLvls = [
   {
      id: "one",
      value: 1,
      name: "lvls",
      isChecked: false,
   },
   {
      id:"two",
      value: 2,
      name: "lvls",
      isChecked: false,
   },
   {
      id:"else",
      value: 3,
      name: "lvls",
      isChecked: false,
   },
   {
      id:"else",
      value: 0,
      name: "lvls",
      isChecked: true,
   },
]

const Tasklist = () => {
   return (
      <div className='tasklist'>
         <div className="tasklist__headrow headrow">
            <h1 className="headrow__title">Update!</h1>
            <div className="headrow__info">
               <IoIosInformationCircle />
            </div>
         </div>
         <div className="tasklist__filters filters">
            <div className="filters__lvls" > 
            {
               radioLvls.map((item)=>{<Radio key={item.value} id={item.id} value={item.value} name={item.name}/>})
            }
            </div>
         </div>
      </div>
   )
}

export default Tasklist