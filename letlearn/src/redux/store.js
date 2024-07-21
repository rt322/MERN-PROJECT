import {configureStore} from "@reduxjs/toolkit"
import {profileReducer, subscriptionReducer, userReducer} from "./reducers/userReducer.js"
import { courseReducer } from "./reducers/courseReducer.js";
import { adminReducer } from "./reducers/adminReducer.js";
import { otherReducer } from "./reducers/otherReducer.js";



export const server='https://myserver9.onrender.com/api/v1';
const store=configureStore({
   reducer:{
      user:userReducer,
      profile:profileReducer,
      course:courseReducer,
      subscription:subscriptionReducer,
      admin:adminReducer,
      other:otherReducer,
   }
})

export default store

