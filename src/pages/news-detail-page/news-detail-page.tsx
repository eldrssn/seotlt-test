import { useParams } from 'react-router-dom';

import { FullNewsArticle, selectNewsById } from '@features';
import { useAppSelector } from '@shared';

export const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = useAppSelector((state) => selectNewsById(state, id));

  if (!newsItem) {
    return (
      <div className="container">
        <h2>Новость не найдена</h2>
        <p>Возможно, она была удалена или вы перешли по неверной ссылке.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <FullNewsArticle newsItem={newsItem} />
    </div>
  );
};
