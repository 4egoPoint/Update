

import { configureStore } from '@reduxjs/toolkit'
import taskListSlice from '../features/taskListSlice'

export const store = configureStore({
   reducer: {
      taskList: taskListSlice,
   },
})