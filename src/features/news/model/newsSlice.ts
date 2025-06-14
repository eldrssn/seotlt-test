import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type INews, type NewsState } from './types';
import { loadNewsFromStorage, saveNewsToStorage } from '../api';

const initialState: NewsState = {
  news: loadNewsFromStorage(),
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNews: (
      state,
      action: PayloadAction<Omit<INews, 'id' | 'createdAt'>>,
    ) => {
      const newNews: INews = {
        id: Date.now().toString(),
        createdAt: Date.now(),
        ...action.payload,
      };
      state.news.push(newNews);
      saveNewsToStorage(state.news);
    },
    updateNews: (state, action: PayloadAction<INews>) => {
      const index = state.news.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.news[index] = action.payload;
        saveNewsToStorage(state.news);
      }
    },
    removeNews: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.news = state.news.filter((item) => item.id !== id);
      saveNewsToStorage(state.news);
    },
  },
});

export const { addNews, updateNews, removeNews } = newsSlice.actions;
export default newsSlice.reducer;
