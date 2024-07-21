import { server } from "../store.js";
import axios from "axios"


export const createCourse=(formData)=>async(dispatch)=>{
    try {
        //{ title, description, category, createdBy }
        dispatch({
            type:'createCourseRequest'
        });
const {data}=  await    axios.post(`${server}/createcourse`,formData,{
    headers: {
        'Content-type': 'multipart/form-data',
    },
    withCredentials:true,

})

dispatch({type:'createCourseSuccess',payload:data.message})
    } catch (error) {
      
        dispatch({

        type:'createCourseFail',
        payload:error.response.data.message,
    })
    }
}


export const deleteCourse=(id)=>async(dispatch)=>{
    try {
        //{ title, description, category, createdBy }
        dispatch({
            type:'deleteCourseRequest'
        });
const {data}=  await    axios.delete(`${server}/course/${id}`,{
    
    withCredentials:true,

})

dispatch({type:'deleteCourseSuccess',payload:data.message})
    } catch (error) {
      
        dispatch({

        type:'deleteCourseFail',
        payload:error.response.data.message,
    })
    }
}

export const addLectureCourse=(id,formdata)=>async(dispatch)=>{
    try {
        //{ title, description, category, createdBy }
        dispatch({
            type:'addLectureRequest'
        });
const {data}=  await    axios.post(`${server}/course/${id}`,formdata,{
    
    withCredentials:true,

})

dispatch({type:'addLectureSuccess',payload:data.message})
    } catch (error) {
      
        dispatch({

        type:'addLectureFail',
        payload:error.response.data.message,
    })
    }
}


export const deleteLecture=(courseId,lectureId)=>async(dispatch)=>{
    try {
        //{ title, description, category, createdBy }
        dispatch({
            type:'deleteLectureRequest'
        });
const {data}=  await    axios.delete(`${server}/deletelecture?courseId=${courseId}&lectureId=${lectureId}`,{
    
    withCredentials:true,

})

dispatch({type:'deleteLectureSuccess',payload:data.message})
    } catch (error) {
      
        dispatch({

        type:'deleteLectureFail',
        payload:error.response.data.message,
    })
    }
}

export const getallUsers=()=>async(dispatch)=>{
    try {
        //{ title, description, category, createdBy }
        dispatch({
            type:'getallusersRequest'
        });
const {data}= await    axios.get(`${server}/admin/users`,{
    
    withCredentials:true,

})

dispatch({type:'getallusersSuccess',payload:data.users})
    } catch (error) {
      
        dispatch({

        type:'getallusersFail',
        payload:error.response.data.message,
    })
    }
}

export const deleteUsers=(id)=>async(dispatch)=>{
    try {
        //{ title, description, category, createdBy }
        dispatch({
            type:'DeleteusersRequest'
        });
const {data}= await    axios.delete(`${server}/admin/user/${id}`,{
    
    withCredentials:true,

})

dispatch({type:'DeleteusersSuccess',payload:data.message})
    } catch (error) {
      
        dispatch({

        type:'DeleteusersFail',
        payload:error.response.data.message,
    })
    }
}


export const UpdateUserRole=(id)=>async(dispatch)=>{
    try {
        //{ title, description, category, createdBy }
        dispatch({
            type:'UpdateRoleRequest'
        });
const {data}=  await    axios.put(`${server}/user/${id}`,{},{
    
    withCredentials:true,

})//{} in await line is for fetching user

dispatch({type:'UpdateRoleSuccess',payload:data.message})
    } catch (error) {
      
        dispatch({

        type:'UpdateRoleFail',
        payload:error.response.data.message,
    })
    }
}


export const DashboardStats=()=>async(dispatch)=>{
    try {
        //{ title, description, category, createdBy }
        dispatch({
            type:'adminStatsRequest'
        });
const {data}= await    axios.get(`${server}/admin/stats`,{
    
    withCredentials:true,

})

dispatch({type:'adminStatsSuccess',payload:data})
    } catch (error) {
      
        dispatch({

        type:'adminStatsFail',
        payload:error.response.data.message,
    })
    }
}



