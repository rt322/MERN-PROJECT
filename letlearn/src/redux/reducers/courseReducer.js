import {createReducer} from "@reduxjs/toolkit"

const initialState = {
  courses:[],
  loading: false, // Add loading property
  error: null,    // Add error property
  lectures:[],
  message:null,
  };
  
  export const courseReducer = createReducer(initialState, (builder) => {
    builder
      .addCase('allCoursesRequest', (state) => {
        state.loading = true;
       
  
      })
      .addCase('allCoursesSuccess', (state, action) => {
        state.loading = false;
       
        state.courses = action.payload;
        state.error = null;
       
      })
      .addCase('allCoursesFail', (state, action) => {
        state.loading = false;
       
        state.error = action.payload;
      })

      .addCase('getCourseRequest', (state) => {
        state.loading = true;
       
  
      })
      .addCase('getCourseSuccess', (state, action) => {
        state.loading = false;
       
        state.lectures = action.payload;
        state.error = null;
       
      })
      .addCase('getCourseFail', (state, action) => {
        state.loading = false;
       
        state.error = action.payload;
      })

      .addCase('addtoPlaylistRequest', (state) => {
        state.loading = true;
       
  
      })
      .addCase('addtoPlaylistSuccess', (state, action) => {
        state.loading = false;
       
        state.message = action.payload;
        state.error = null;
       
      })
      .addCase('addtoPlaylistFail', (state, action) => {
        state.loading = false;
       
        state.error = action.payload;
      })

      .addCase('clearError', (state) => {
        state.error = null;
      })
      .addCase('clearMessage', (state) => {
        state.message = null;
      })
    
      
     
     
     
  });
  