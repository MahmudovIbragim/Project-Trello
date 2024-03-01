import { commentReducer } from './features/commentSlice';
import { todoReducer } from './features/todoSlice';
import { userDataReducer } from './features/userSlice';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
	reducer: {
		userDataReducer,
		todoReducer,
		commentReducer
	}
});

type RootType = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;
