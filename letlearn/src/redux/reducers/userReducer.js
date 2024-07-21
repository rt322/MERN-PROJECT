import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  message: null, // Initialize message to null
  error: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('loginRequest', (state) => {
      state.loading = true;

    })
    .addCase('loginSuccess', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.error=null;
    })
    .addCase('loginFail', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    //loaduser reducer help to get loginned state and my profile by /me route
    .addCase('loadUserRequest', (state) => {
      state.loading = true;

    })
    .addCase('loadUserSuccess', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      
    })
    .addCase('loadUserFail', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase('logoutRequest', (state) => {
      state.loading = true;

    })
    .addCase('logoutSuccess', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user =null;
      state.message=action.payload;
      
    })
    .addCase('logoutFail', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    })

    .addCase('registerRequest', (state) => {
      state.loading = true;

    })
    .addCase('registerSuccess', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user =null;
      state.message=action.payload;
      
    })
    .addCase('registerFail', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase('clearError', (state) => {
      state.error = null;
    })
    .addCase('clearMessage', (state) => {
      state.message = null;
    });
   
});

//When state.loading is true, it typically indicates that a request is being made or some asynchronous operation is in progress.

export const profileReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('updateprofileRequest', (state) => {
      state.loading = true;

    })
    .addCase('updateprofileSuccess', (state,action) => {
      state.loading = false;
      state.message=action.payload

    })
    .addCase('updateprofileFail', (state,action) => {
      state.loading = false;
      state.error=action.payload

    })

    .addCase('clearError', (state) => {
      state.error = null;
    })
    .addCase('clearMessage', (state) => {
      state.message = null;
    })
  
    .addCase('changePasswordRequest', (state) => {
      state.loading = true;

    })
    .addCase('changePasswordSuccess', (state,action) => {
      state.loading = false;
      state.message=action.payload.message;

    })
    .addCase('changePasswordFail', (state,action) => {
      state.loading = false;
      state.error=action.payload;

    })

    .addCase('forgetPasswordRequest', (state) => {
      state.loading = true;

    })
    .addCase('forgetPasswordSuccess', (state,action) => {
      state.loading = false;
      state.message=action.payload.message;

    })
    .addCase('forgetPasswordFail', (state,action) => {
      state.loading = false;
      state.error=action.payload;

    })

    .addCase('resetPasswordRequest', (state) => {
      state.loading = true;

    })
    .addCase('resetPasswordSuccess', (state,action) => {
      state.loading = false;
      state.message=action.payload.message;

    })
    .addCase('resetPasswordFail', (state,action) => {
      state.loading = false;
      state.error=action.payload;

    })

    .addCase('removefromPlaylistRequest', (state) => {
      state.loading = true;
     

    })
    .addCase('removefromPlaylistSuccess', (state, action) => {
      state.loading = false;
     
      state.message = action.payload;
      state.error = null;
     
    })
    .addCase('removefromPlaylistFail', (state, action) => {
      state.loading = false;
     
      state.error = action.payload;
    })
    
  
  
  })

  export const subscriptionReducer = createReducer(initialState, (builder) => {
    builder
      .addCase('buySubscriptionRequest', (state) => {
        state.loading = true;
       
  
      })
      .addCase('buySubscriptionSuccess', (state, action) => {
        state.loading = false;
       
        state.subscriptionId = action.payload;
        state.error = null;
       
      })
      .addCase('buySubscriptionFail', (state, action) => {
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
  
