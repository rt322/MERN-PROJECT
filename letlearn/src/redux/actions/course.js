import { server } from "../store.js";
import axios from "axios"


export const getAllCourses=()=>async(dispatch)=>{
    try {
        dispatch({
            type:'allCoursesRequest'
        })
const {data}=  await    axios.get(`${server}/courses`)

dispatch({type:'allCoursesSuccess',payload:data.courses})
    } catch (error) {
      
        dispatch({

        type:'allCoursesFail',
        payload:error.response.data.message,
    })
    }
}

export const getCourseLectures=id=>async(dispatch)=>{
    try {
        dispatch({
            type:'getCourseRequest'
        })
const {data}=  await    axios.get(`${server}/course/${id}`,{
    withCredentials:true,
})

dispatch({type:'getCourseSuccess',payload:data.lectures})
    } catch (error) {
      
        dispatch({

        type:'getCourseFail',
        payload:error.response.data.message,
    })
    }
}

