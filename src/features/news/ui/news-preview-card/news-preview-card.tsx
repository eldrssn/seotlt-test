import { type FC } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, sanitizeHtml } from '@shared';
import { formatDateShort } from '@features';

import { NewsPreviewCardProps } from './types';
import styles from './news-preview-card.module.scss';

export const NewsPreviewCard: FC<NewsPreviewCardProps> = ({ newsItem }) => {
  const formattedDate = formatDateShort(newsItem.createdAt);
  const safeContent = sanitizeHtml(newsItem.content);

  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{newsItem.title}</h2>
        <span className={styles.date}>{formattedDate}</span>
      </div>
      <div
        className={`${styles.previewContent} content-view`}
        dangerouslySetInnerHTML={{ __html: safeContent }}
      />
      <Link to={`/news/${newsItem.id}`}>
        <Button variant="outline">Открыть новость</Button>
      </Link>
    </Card>
  );
};
