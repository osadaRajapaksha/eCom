const authSlice = {
  name: 'auth',
  initialState: {},
  reducers: {
    setUser: (state, action) => {}
  }
}

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
