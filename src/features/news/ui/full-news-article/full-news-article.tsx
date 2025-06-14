import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, sanitizeHtml, useAppDispatch } from '@shared';
import { formatDateFull, removeNews } from '@features';

import { FullNewsArticleProps } from './types';
import styles from './full-news-article.module.scss';

export const FullNewsArticle: FC<FullNewsArticleProps> = ({ newsItem }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const safeContent = sanitizeHtml(newsItem.content);
  const formattedDate = formatDateFull(newsItem.createdAt);

  const handleEdit = () => {
    navigate(`/edit/${newsItem.id}`);
  };

  const handleDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить эту новость?')) {
      dispatch(removeNews(newsItem.id));
      navigate('/');
    }
  };

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>{newsItem.title}</h1>
        <div className={styles.meta}>
          <div>{formattedDate}</div>
          <div className={styles.controls}>
            <Button variant="outline" onClick={handleEdit}>
              Редактировать
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Удалить
            </Button>
          </div>
        </div>
      </header>
      <div
        className={`${styles.content} content-view`}
        dangerouslySetInnerHTML={{ __html: safeContent }}
      />
    </article>
  );
};
