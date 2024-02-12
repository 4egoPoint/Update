

import { FaPlus } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import "./tasklist.scss"
import Radio from "./components/Radio";
import Smalltask from "./components/Smalltask";
import { useSelector } from 'react-redux'

const checkboxLvls = [
   {
      value: 1,
      title: "Easy",
      property:"",
   },
   {
      value: 2,
      title: "Medium",
      property:"",
   },
   {
      value: 3,
      title: "Hurd",
      property:"",
   },
]
const checkboxPriority = [
   {
      value: 1,
      title: "Common",
      property:"",
   },
   {
      value: 2,
      title: "Important",
      property:"",
   },
   {
      value: 3,
      title: "Necessary",
      property:"",
   },
]
const checkboxStatus = [
   {
      value: 1,
      title: "New",
      property:"",
   },
   {
      value: 2,
      title: "In process",
      property:"",
   },
   {
      value: 3,
      title: "Done",
      property:"",
   },
]
const checkboxDaily = [
   {
      value: 1,
      title: "Daily task",
      property:"",
   },
]

const Tasklist = () => {
   const taskList = useSelector((state) => state.taskList)
   return (
      <div className='tasklist'>
         <div className="tasklist__headrow headrow">
            <h1 className="headrow__title">Update!</h1>
            <div className="headrow__info">
               <IoIosInformationCircle className="headrow__info-icon" />
               <div className="headrow__text">lor  asd asdasd asd as d asddas d as d asd as da sd a sd asda sd as das d as d asd</div>
            </div>
         </div>


         <div className="tasklist__control-row">
            <div className="tasklist__filters filters">
               <div className="filters__type" >
                  <h3>Level</h3>
                  {
                     checkboxLvls.map((item) => <Radio key={item.value} value={item.value} title={item.title} property={item.property}/>)
                  }
               </div>
               <div className="filters__type" >
                  <h3>Priority</h3>
                  {
                     checkboxPriority.map((item) => <Radio key={item.value} value={item.value} title={item.title} property={item.property}/>)
                  }
               </div>
               <div className="filters__type" >
                  <h3>Status</h3>
                  {
                     checkboxStatus.map((item) => <Radio key={item.value} value={item.value} title={item.title} property={item.property}/>)
                  }
               </div>
               <div className="filters__type" >
                  {
                     checkboxDaily.map((item) => <Radio key={item.value} value={item.value} title={item.title} property={item.property}/>)
                  }
               </div>
            </div>
            <div className="tasklist__create">
               <button className="tasklist__button"><FaPlus /> New task </button>
            </div>
         </div>


         <div className="tasklist__list">
            {
               taskList.map((item)=><Smalltask 
               key={item.id}
               title={item.title}
               text={item.text}
               isTaskDaily={item.isTaskDaily}
               isItDone={item.isItDone}
               curProgress={item.curProgres}
               />)
            }
         </div>
      </div>
   )
}

export default Tasklist