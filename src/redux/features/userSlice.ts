import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface TypeUserData {
	_id: number;
	name: string;
	password: number | string;
	image: string;
}

interface InitialState {
	data: TypeUserData[];
	loading: boolean;
	error: boolean;
}

interface TypedDataUser {
	name: string;
	password: string | number;
	image: string;
}

const initialState: InitialState = {
	data: [],
	loading: false,
	error: false
};

const link = import.meta.env.VITE_BACKEND_URL_USER;

export const loginPostUser = createAsyncThunk(
	'user/postUser',
	async (dataUser: TypedDataUser) => {
		try {
			const response = (await axios.post(link, dataUser)).data;
			return response;
		} catch (e) {
			console.error(e);
		}
	}
);

export const getUsers = createAsyncThunk('user/getUser', async () => {
	try {
		const response = (await axios.get(link)).data;
		return response;
	} catch (e) {
		console.error(e);
	}
});

const userSlice = createSlice({
	name: 'userData',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(loginPostUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(loginPostUser.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			})
			.addCase(loginPostUser.rejected, (state) => {
				state.loading = false;
				state.error = true;
			})
			.addCase(getUsers.pending, (state) => {
				state.loading = true;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			})
			.addCase(getUsers.rejected, (state) => {
				state.loading = false;
				state.error = true;
			});
	}
});

export const userDataReducer = userSlice.reducer;
