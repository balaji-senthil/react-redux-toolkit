import {createSlice} from '@reduxjs/toolkit'

const initialUserState = {userName: '', age: 18, email: ''}

export const userSlice = createSlice({
  name: 'user',
  initialState: {value: initialUserState},
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },

    logout: state => {
      state.value = initialUserState
    },
  },
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer
