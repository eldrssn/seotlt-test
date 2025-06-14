import { useState, useEffect, type FC } from 'react';

import { Button, WysiwygEditor } from '@shared';

import { NewsFormProps } from './types';
import styles from './news-form.module.scss';

export const NewsForm: FC<NewsFormProps> = ({
  initialData,
  onSubmit,
  submitButtonText = 'Сохранить',
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || content === '<p></p>') {
      alert('Заголовок и текст новости не могут быть пустыми!');
      return;
    }
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="title" className={styles.label}>
          Заголовок
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
          placeholder="Введите заголовок новости"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Текст новости</label>

        <WysiwygEditor value={content} onChange={setContent} />
      </div>
      <Button type="submit" disabled={!content}>
        {submitButtonText}
      </Button>
    </form>
  );
};
