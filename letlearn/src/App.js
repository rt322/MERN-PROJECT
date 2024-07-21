import React, { useEffect } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Layout/Header/Header';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Layout/Footer/Footer';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import ForgetPassword from './Components/Auth/ForgetPassword';
import ResetPassword from './Components/Auth/ResetPassword';
import Contact from './Components/Contact/Contact';
import Request from './Components/Request';
import Coursepage from './Components/CoursePage/Coursepage';
import Profile from './Components/Profile/Profile';
import Changepassword from './Components/Profile/Changepassword';
import Updateprofile from './Components/Profile/Updateprofile';

import AdminCourses from './Components/Admin/AdminCourses/AdminCourses';
import Users from './Components/Admin/Users/Users.jsx';
import CreateCourse from './Components/Admin/CreateCourses/CreateCourse';
import Subscribe from './Components/Payments/Subscribe';
import PaymentSuccess from './Components/Payments/PaymentSuccess';
import { useDispatch, useSelector } from 'react-redux';
import toast,{Toaster} from "react-hot-toast"
import { getMyProfile } from './redux/actions/user.js';
import {ProtectedRoute} from "protected-route-react"

import Dashboard from './Components/Admin/Dashboard/Dashboard.jsx';
import ChangeRole from './Components/ChangeRole.jsx';


function App() {
  const {isAuthenticated,user,message,error}=useSelector(state=>state.user)//helps to update role if login success ,then profile option is seen
  const dispatch=useDispatch();
  useEffect(()=>{//toast if pop up message during login
    if(error){
      toast.error(error);
      dispatch({type:'clearError'});
    }
if(message) {
  toast.success(message);
  dispatch({type:'clearMessage'});
}

  },[dispatch,error,message])

  useEffect(()=>{
    dispatch(getMyProfile())
  },[dispatch])
  return (
  <BrowserRouter> 
  <Header isAuthenticated={isAuthenticated} user={user}/>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/courses" element={<Courses/>}/>
   <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile user={user}/></ProtectedRoute>}/>
   <Route path="/changepassword" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Changepassword/></ProtectedRoute>}/>
   <Route path="/updateprofile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Updateprofile/></ProtectedRoute>}/>
   <Route path="/course/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Coursepage user={user}/></ProtectedRoute>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/changerole" element={<ProtectedRoute isAuthenticated={isAuthenticated}><ChangeRole /></ProtectedRoute>} />

   <Route path="/subscribe" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Subscribe user={user}/></ProtectedRoute>}/>
   <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
   

   <Route path="/register" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"><Register/></ProtectedRoute>}/>
   <Route path="/login" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"><Login/></ProtectedRoute>}/>
   <Route path="/forgetpassword" element={<ProtectedRoute isAuthenticated={!isAuthenticated}  redirect='/profile'><ForgetPassword/></ProtectedRoute>}/>
   <Route path="/resetpassword/:token" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/profile'><ResetPassword/></ProtectedRoute>}/>
   <Route path="/request" element={<Request/>}/>


   <Route path="/admin/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role==="admin"}><Dashboard/></ProtectedRoute>}/>


   <Route path="/admin/admincourses" element={<ProtectedRoute 
   
   isAuthenticated={isAuthenticated} adminRoute={true} 
   isAdmin={user && user.role==="admin"}
   ><AdminCourses/></ProtectedRoute>}/>
   <Route path="/admin/users" element={<ProtectedRoute 
   isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role==="admin"}><Users/></ProtectedRoute>}/>
   <Route path="/admin/createcourse" element={<CreateCourse/>} />
  </Routes>
  <Toaster/>
 <Footer/>
  </BrowserRouter>


  );
}

export default App;


