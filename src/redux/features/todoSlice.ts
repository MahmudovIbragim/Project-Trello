import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TodoItemType, TodoType } from '../../types';

interface InitialState {
	data: TodoType[];
	loading: boolean;
	error: boolean;
}

const initialState: InitialState = {
	data: [],
	loading: false,
	error: false
};

const apiLink = import.meta.env.VITE_BACKEND_URL_TODO;

export const postTodo = createAsyncThunk(
	'todo/postTodo',
	async (newData: { title: string }) => {
		try {
			const response = await axios.post(apiLink, newData);
			return response.data;
		} catch (error) {
			console.error('Error while posting todo:', error);
			throw error;
		}
	}
);

export const getTodo = createAsyncThunk('todo/getTodo', async () => {
	try {
		const response = await axios.get(apiLink);
		return response.data;
	} catch (error) {
		console.error('Error while getting todos:', error);
		throw error;
	}
});

export const patchTodo = createAsyncThunk(
	'todo/patchTodo',
	async ({ id, newTodoData }: { id: number; newTodoData: TodoType }) => {
		try {
			const response = await axios.patch(`${apiLink}/${id}`, newTodoData);
			return response.data;
		} catch (error) {
			console.error('Error while patching todo:', error);
			throw error;
		}
	}
);

export const putTodoTitle = createAsyncThunk(
	'todo/putTodo',
	async ({
		id,
		newData
	}: {
		id: number;
		newData: { todos: TodoItemType[] };
	}) => {
		try {
			const response = await axios.put(`${apiLink}/${id}`, newData);
			return response.data;
		} catch (error) {
			console.error('Error while putting todo title:', error);
			throw error;
		}
	}
);

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(postTodo.pending, (state) => {
				state.loading = true;
			})
			.addCase(postTodo.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			})
			.addCase(postTodo.rejected, (state) => {
				state.loading = false;
				state.error = true;
			})
			.addCase(getTodo.pending, (state) => {
				state.loading = true;
			})
			.addCase(getTodo.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			})
			.addCase(getTodo.rejected, (state) => {
				state.loading = false;
				state.error = true;
			})
			.addCase(patchTodo.pending, (state) => {
				state.loading = true;
			})
			.addCase(patchTodo.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			})
			.addCase(patchTodo.rejected, (state) => {
				state.loading = false;
				state.error = true;
			})
			.addCase(putTodoTitle.pending, (state) => {
				state.loading = true;
			})
			.addCase(putTodoTitle.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			})
			.addCase(putTodoTitle.rejected, (state) => {
				state.loading = false;
				state.error = true;
			});
	}
});

export const todoReducer = todoSlice.reducer;