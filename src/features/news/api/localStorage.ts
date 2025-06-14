import { type INews } from '../model';

const NEWS_STORAGE_KEY = 'news';

export const loadNewsFromStorage = (): INews[] => {
  try {
    const storedNews = localStorage.getItem(NEWS_STORAGE_KEY);
    if (storedNews) {
      return JSON.parse(storedNews);
    }
  } catch (error) {
    console.error('Ошибка Local Storage', error);
    localStorage.removeItem(NEWS_STORAGE_KEY);
  }
  return [];
};

export const saveNewsToStorage = (news: INews[]) => {
  try {
    const newsToStore = JSON.stringify(news);
    localStorage.setItem(NEWS_STORAGE_KEY, newsToStore);
  } catch (error) {
    console.error('Ошибка Local Storage', error);
  }
};
