import {createSlice} from '@reduxjs/toolkit'

const initialFontColor = ''

export const fontColorSlice = createSlice({
  name: 'theme',
  initialState: {value: initialFontColor},
  reducers: {
    changeFontColor: (state, action) => {
      state.value = action.payload
    },
  },
})

export const {changeFontColor} = fontColorSlice.actions

export default fontColorSlice.reducer
