//In JavaScript, when importing a default export (i.e., something exported using export default), you do not use curly braces. When importing a named export (i.e., something exported with a specific name using export), you use curly braces.

import { server } from "../store.js";
import axios from "axios"


export const login=(email,password)=>async dispatch=>{
    
        dispatch({type:"loginRequest"});
        const {data}=await axios.post(`${server}/login`,{email,password},{
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials:true,
        })
       
        dispatch({type:'loginSuccess',payload:data});
    } 


export const getMyProfile=()=>async dispatch=>{
    try {
        dispatch({type:"loadUserRequest"});
        const {data}=await axios.get(`${server}/me`,{
           
            withCredentials:true,
        })
      
        dispatch({type:'loadUserSuccess',payload:data.user});
    } catch (error) {
        dispatch({type:'loadUserFail',payload:error.response.data.message});
    }
}

export const logout=()=>async dispatch=>{
    try {
        dispatch({type:"logoutRequest"});
        const {data}=await axios.get(`${server}/logout`,{
            withCredentials:true,  
        }
        )
       
        dispatch({type:'logoutSuccess',payload:data.message});
    } catch (error) {
        dispatch({type:'logoutFail',payload:error.response.data.message});
    }
}

export const register = (name, email, password) => async (dispatch) => {
    try {
      dispatch({ type: "registerRequest" });
      const { data } = await axios.post(
        `${server}/register`,
        { name, email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
  
      dispatch({ type: 'registerSuccess', payload: data.message });
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({ type: 'registerFail', payload: error.response.data.message });
      } else {
        // Handle other types of errors if needed
        dispatch({ type: 'registerFail', payload: 'An error occurred during registration.' });
      }
    }
  };
  


export const buySubscription=()=>async dispatch=>{
    try {
        dispatch({type:"buySubscriptionRequest"});
        const {data}=await axios.get(`${server}/subscribe`,{
          
            withCredentials:true,
        })
       
        dispatch({type:'buySubscriptionSuccess',payload:data.subscriptionId});
    } catch (error) {
        dispatch({type:'buySubscriptionFail',payload:error.response.data.message});
    }
}
