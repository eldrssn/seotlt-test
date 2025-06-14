import { INews } from 'features';

export type NewsFormData = Omit<INews, 'id' | 'createdAt'>;

export interface NewsFormProps {
  initialData?: INews;
  onSubmit: (data: NewsFormData) => void;
  submitButtonText?: string;
}
