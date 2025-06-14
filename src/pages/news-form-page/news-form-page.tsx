import { useNavigate, useParams } from 'react-router-dom';

import { Card, useAppDispatch, useAppSelector } from '@shared';
import {
  addNews,
  NewsForm,
  NewsFormData,
  selectNewsById,
  updateNews,
} from '@features';

export const NewsFormPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const isEditing = Boolean(id);
  const newsToEdit = useAppSelector((state) => selectNewsById(state, id));

  if (isEditing && !newsToEdit) {
    navigate('/');
    return null;
  }

  const handleSubmit = (data: NewsFormData) => {
    if (isEditing && newsToEdit) {
      dispatch(
        updateNews({
          id: newsToEdit.id,
          createdAt: newsToEdit.createdAt,
          ...data,
        }),
      );
      navigate(`/news/${newsToEdit.id}`);
    } else {
      dispatch(addNews(data));
      navigate('/');
    }
  };

  return (
    <div className="container">
      <Card>
        <h1>
          {isEditing ? 'Редактирование новости' : 'Создание новой новости'}
        </h1>
        <NewsForm
          initialData={isEditing ? newsToEdit : undefined}
          onSubmit={handleSubmit}
          submitButtonText={isEditing ? 'Сохранить изменения' : 'Опубликовать'}
        />
      </Card>
    </div>
  );
};
