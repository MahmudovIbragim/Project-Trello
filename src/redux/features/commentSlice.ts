import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TypeDataComment } from '../../types';

interface TypeCommentData {
	_id: number;
	review: string;
}

interface TypeInitialState {
	data: TypeCommentData[];
	loading: boolean;
	error: boolean;
}

const initialState: TypeInitialState = {
	data: [],
	loading: false,
	error: false
};

const apiLink =
	'https://api.elchocrud.pro/api/v1/9ec1b1497173fe4c6bfcb2734ee5d4c4/trello_comments';

export const postComments = createAsyncThunk(
	'comment/postComment',
	async (newData: TypeDataComment) => {
		try {
			const response = (await axios.post(apiLink, newData)).data;
			return response;
		} catch (e) {
			console.error(e);
		}
	}
);

export const getComments = createAsyncThunk('comment/getComment', async () => {
	try {
		const response = (await axios.get(apiLink)).data;
		return response;
	} catch (e) {
		console.error(e);
	}
});

export const deleteComment = createAsyncThunk(
	'comment/deleteComment',async (id:number) => {
		try {
      const response = (await axios.delete(`${apiLink}/${id}`)).data
      return response
		} catch (e) {
			console.error(e);
		}
	}
);

const commentSlice = createSlice({
	name: 'comment',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(postComments.pending, (state) => {
				state.loading = true;
			})
			.addCase(postComments.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			})
			.addCase(postComments.rejected, (state) => {
				state.loading = false;
				state.error = true;
			})
			.addCase(getComments.pending, (state) => {
				state.loading = true;
			})
			.addCase(getComments.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			})
			.addCase(getComments.rejected, (state) => {
				state.loading = false;
				state.error = true;
			})
			.addCase(deleteComment.pending, (state) => {
				state.loading = true;
			})
			.addCase(deleteComment.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			})
			.addCase(deleteComment.rejected, (state) => {
				state.loading = false;
				state.error = true;
			});
	}
});

export const commentReducer = commentSlice.reducer;
