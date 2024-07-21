import {createReducer} from "@reduxjs/toolkit"

const initialState = {
  
  loading: false, // Add loading property
  error: null,    // Add error property
  
  message:null,
  };
  
  export const adminReducer = createReducer(initialState, (builder) => {
    builder

    .addCase('adminStatsRequest', (state) => {
      state.loading = true;
     

    })
    .addCase('adminStatsSuccess', (state, action) => {
      state.loading = false;
     
      state. stats = action.payload. stats;
      state.userscount = action.payload.userscount;
      state.subscriptioncount = action.payload.subscriptioncount;
      state.viewscount = action.payload.viewscount;
      state.subscriptionpercent = action.payload.subscriptionpercent;
      state.viewspercent = action.payload.viewspercent;
      state.userspercent = action.payload.userspercent;
      state.subscriptionprofit = action.payload.subscriptionprofit;
      state.viewsprofit = action.payload.viewsprofit;
      state.usersprofit = action.payload.usersprofit;
      state.error = null;
     
    })
    .addCase('adminStatsFail', (state, action) => {
      state.loading = false;
     
      state.error = action.payload;
    })
      .addCase('createCourseRequest', (state) => {
        state.loading = true;
       
  
      })
      .addCase('createCourseSuccess', (state, action) => {
        state.loading = false;
       
        state.message = action.payload;
        state.error = null;
       
      })
      .addCase('createCourseFail', (state, action) => {
        state.loading = false;
       
        state.error = action.payload;
      })

      .addCase('deleteCourseRequest', (state) => {
        state.loading = true;
       
  
      })
      .addCase('deleteCourseSuccess', (state, action) => {
        state.loading = false;
       
        state.message = action.payload;
        state.error = null;
       
      })
      .addCase('deleteCourseFail', (state, action) => {
        state.loading = false;
       
        state.error = action.payload;
      })

      .addCase('addLectureRequest', (state) => {
        state.loading = true;
       
  
      })
      .addCase('addLectureSuccess', (state, action) => {
        state.loading = false;
       
        state.message = action.payload;
        state.error = null;
       
      })
      .addCase('addLectureFail', (state, action) => {
        state.loading = false;
       
        state.error = action.payload;
      })

      .addCase('deleteLectureRequest', (state) => {
        state.loading = true;
       
  
      })
      .addCase('deleteLectureSuccess', (state, action) => {
        state.loading = false;
       
        state.message = action.payload;
        state.error = null;
       
      })
      .addCase('deleteLectureFail', (state, action) => {
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

      .addCase('getallusersRequest', (state) => {
        state.loading = true;
       
  
      })
      .addCase('getallusersSuccess', (state, action) => {
        state.loading = false;
       
        state.users = action.payload;
        state.error = null;
       
      })
      .addCase('getallusersFail', (state, action) => {
        state.loading = false;
       
        state.error = action.payload;
      })

      .addCase('DeleteusersRequest', (state) => {
        state.loading = true;
       
  
      })
      .addCase('DeleteusersSuccess', (state, action) => {
        state.loading = false;
       
        state.message = action.payload;
        state.error = null;
       
      })
      .addCase('DeleteusersFail', (state, action) => {
        state.loading = false;
       
        state.error = action.payload;
      })

      .addCase('UpdateRoleRequest', (state) => {
        state.loading = true;
       
  
      })
      .addCase('UpdateRoleSuccess', (state, action) => {
        state.loading = false;
       
        state.message = action.payload;
        state.error = null;
       
      })
      .addCase('UpdateRoleFail', (state, action) => {
        state.loading = false;
       
        state.error = action.payload;
      })

    
      
     
     
     
  });
  