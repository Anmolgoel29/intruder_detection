import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthday: '',
  profilePic: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { name, firstName, lastName, email, phone, birthday, profilePic } = action.payload;
      state.name = name;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.phone = phone;
      state.birthday = birthday;
      state.profilePic = profilePic;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;