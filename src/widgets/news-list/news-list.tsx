import { useAppSelector } from '@shared';
import { NewsPreviewCard, selectAllNews } from '@features';

import styles from './news-list.module.scss';

export const NewsList = () => {
  const news = useAppSelector(selectAllNews);

  return (
    <>
      {news.length > 0 ? (
        <div className={styles.grid}>
          {news.map((newsItem) => (
            <NewsPreviewCard key={newsItem.id} newsItem={newsItem} />
          ))}
        </div>
      ) : (
        <p className={styles.emptyMessage}>
          Новостей пока нет. Добавьте первую!
        </p>
      )}
    </>
  );
};
