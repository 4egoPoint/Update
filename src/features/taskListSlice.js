
import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
   {
      id: 1, 
      lvl: 1,//how hard to get it done from 1 to 3
      priority: 2,// level of priority from 1 to 3
      isItDone: false,// if task still eneble
      isTaskDaily: false,// of true castomer hawe to du it eweryday
      compliteCounter: 0, // use when it is note one time task
      curProgress: 100,// number for progress bar
      title: "title",// nae of task
      text: "text",// deskription of task
      smallTaskArr: [
         {
            id: 12,
            title: "arritemtitle",
         },
      ]
   },
]

export const taskListSlice = createSlice({
   name: 'taskList',
   initialState,
   reducers: {
      createNewTask: (state, action) => {
         state = [{
            id: nanoid(), 
            lvl: action.payload.lvl,
            priority: action.payload.priority,
            isItDone: action.payload.isItDone,
            isTaskDaily: action.payload.isTaskDaily,
            compliteCounter: action.payload.compliteCounter, 
            curProgress: action.payload.curProgress,
            title: action.payload.title,
            text: action.payload.text,
            smallTaskArr: [...action.payload.smallTaskArr]
         },...state]
      },
   },
})

export const { increment, decrement, incrementByAmount } = taskListSlice.actions

export default taskListSlice.reducer