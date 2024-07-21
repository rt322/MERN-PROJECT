import { server } from "../store.js";
import axios from "axios"


export const contactUs=(name,email,message)=>async(dispatch)=>{
    try {
        //{ title, description, category, createdBy }
        dispatch({
            type:'contactRequest'
        });
const {data}=  await    axios.post(`${server}/contact`,{name,email,message},{
    headers: {
        'Content-type': 'application/json',
    },
    withCredentials:true,

})

dispatch({type:'contactSuccess',payload:data.message})
    } catch (error) {
      
        dispatch({

        type:'contactFail',
        payload:error.response.data.message,
    })
    }
}