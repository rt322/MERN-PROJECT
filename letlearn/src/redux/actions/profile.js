import { server } from "../store.js";
import axios from "axios"

export const updateprofile=(name,email)=>async dispatch=>{
    try {
        dispatch({
            type:'updateprofileRequest'
        })
const {data}=    await   axios.put(`${server}/updateprofile`,{name,email},{
    withCredentials:true,
})

dispatch({type:'updateprofileSuccess',payload:data.message})
    } catch (error) {
        dispatch({
        type:'updateprofileFail',
        payload:error.response.data.message,
    })
    }
}

export const changePassword=(oldpassword,newpassword)=>async dispatch=>{
    try {
        dispatch({
            type:'changePasswordRequest'
        })
const {data}=    await   axios.put(`${server}/changepassword`,{oldpassword,newpassword},{

    withCredentials:true,
});

dispatch({type:'changePasswordSuccess',payload:data})

    } catch (error) {
        dispatch({
        type:'changePasswordFail',
        payload:error.response.data.message,
    })
    }
}

export const forgetPassword=(email)=>async dispatch=>{
    try {
        dispatch({
            type:'forgetPasswordRequest'
        })
const {data}=    await   axios.post(`${server}/forgetpassword`,{email},{

    withCredentials:true,
});

dispatch({type:'forgetPasswordSuccess',payload:data})

    } catch (error) {
        dispatch({
        type:'forgetPasswordFail',
        payload:error.response.data.message,
    })
    }
}


export const resetPassword=(token,password)=>async dispatch=>{
    try {
        dispatch({
            type:'resetPasswordRequest'
        })
const {data}=    await   axios.put(`${server}/resetpassword/${token}`,{password},{

    withCredentials:true,
});

dispatch({type:'resetPasswordSuccess',payload:data})

    } catch (error) {
        dispatch({
        type:'resetPasswordFail',
        payload:error.response.data.message,
    })
    }
}


export const addtoplaylist=id=>async(dispatch)=>{
    try {
        dispatch({
            type:'addtoPlaylistRequest'
        })
const {data}=  await    axios.post(`${server}/addtoplaylist`,{id},{
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials:true,

})

dispatch({type:'addtoPlaylistSuccess',payload:data.message})
    } catch (error) {
      
        dispatch({

        type:'addtoPlaylistFail',
        payload:error.response.data.message,
    })
    }
}

export const removefromplaylist=id=>async(dispatch)=>{
    try {
        dispatch({
            type:'removefromPlaylistRequest'
        })
const {data}=  await    axios.delete(`${server}/removefromplaylist?id=${id}`,{
   
    withCredentials:true,

})

dispatch({type:'removefromPlaylistSuccess',payload:data.message})
    } catch (error) {
      
        dispatch({

        type:'removefromPlaylistFail',
        payload:error.response.data.message,
    })
    }
}