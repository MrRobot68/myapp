import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

interface IUser {
  name: string;
  username: string;
  email: string;
}

interface IAuth {
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: any;
}

const initialState: IAuth = {
  user: null,
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk('login', async (args: any) => {
  const {email, password} = args;
  try {
    const resp = await fetch(
      'https://jsonplaceholder.typicode.com/users?email=' + email,
    );
    const users = await resp.json();
    if (users.length > 0 && password === '12345') {
      return {
        user: users[0],
        accessToken: 'accesstoken...',
        refreshToken: 'refreshToken...',
      };
    }
    throw {message: 'email or password incorrect!!'};
  } catch (error) {
    throw error;
  }
});

export const register = createAsyncThunk('register', async (args: any) => {
  const {email, firstname, lastname, password} = args;
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        email,
        name: `${firstname} ${lastname}`,
        password,
      }),
    });
    const user = await resp.json();
    console.log('regg=>>', user);

    return {
      user,
      accessToken: 'accesstoken...',
      refreshToken: 'refreshToken...',
    };
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveCredentials: (state, action) => {
      const {user, accessToken} = action.payload;
      state.user = user;
      state.accessToken = accessToken;
    },
    logout: (state, _action) => {
      state.accessToken = null;
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload?.user || null;
      state.accessToken = action.payload?.accessToken || '';
      state.refreshToken = action.payload?.refreshToken || '';
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload?.user || null;
      state.accessToken = action.payload?.accessToken || '';
      state.refreshToken = action.payload?.refreshToken || '';
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const {saveCredentials, logout} = authSlice.actions;

export default authSlice.reducer;
