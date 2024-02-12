

import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { GrCycle } from "react-icons/gr";
import "./components.scss"

const Smalltask = ({title, text, isTaskDaily, isItDone, curProgress,}) => {
   return (
      <div className='smalltask'>
         <div className="smalltask__info">
            <h3 className="smalltask__title">{title}</h3>
            <div className="smalltask__text">{text}</div>
         </div>
         <div className="smalltask__control">
            <div className="smalltask__tosee">
               <div className="smalltask__progress"></div>
               <div className="smalltask__row">
                  <div className="smalltask__minitask"></div>
                  {isTaskDaily ? <div className="smalltask__mark"><GrCycle /></div> : <></>}
               </div>
            </div>
            <div className="smalltask__toclick">
               <button className="smalltask__done"><IoMdCheckmark /></button>
               <button className="smalltask__delete"><MdDeleteForever /></button>
            </div>
         </div>
      </div>
   )
}

export default Smalltask


//<IoMdCheckmark />
//<MdDeleteForever />
//<GrCycle />

