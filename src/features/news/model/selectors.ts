import { createSelector } from '@reduxjs/toolkit';

import { type INews } from './types';
import { RootState } from '@app';

const selectNewsState = (state: RootState) => state.news.news;

export const selectAllNews = createSelector(
  [selectNewsState],
  (news: INews[]): INews[] => {
    return [...news].sort((a, b) => b.createdAt - a.createdAt);
  },
);

export const selectNewsById = createSelector(
  [selectNewsState, (_: RootState, newsId: string | undefined) => newsId],
  (news: INews[], newsId: string | undefined): INews | undefined => {
    if (!newsId) {
      return undefined;
    }
    return news.find((item) => item.id === newsId);
  },
);
