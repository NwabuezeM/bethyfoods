import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: getStoredUser(),
};

function getStoredUser() {
  const storedUser = localStorage.getItem("currentUser");
  if (!storedUser) return null;

  const { data, expiry } = JSON.parse(storedUser);
  const now = new Date().getTime();

  if (now > expiry) {
    localStorage.removeItem("currentUser");
    return null;
  }

  return data;
}

const saveUserToLocalStorage = (user) => {
  const now = new Date().getTime();
  const expiry = now + 3600 * 1000; // One hour in milliseconds
  const storedUser = { data: user, expiry };
  localStorage.setItem("currentUser", JSON.stringify(storedUser));
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
      saveUserToLocalStorage(action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUsers = (state) => state.users;

export default userSlice.reducer;