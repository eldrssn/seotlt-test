import { Routes, Route } from 'react-router-dom';

import { MainLayout } from './layouts';
import { NewsDetailPage, NewsListPage, NewsFormPage } from '@pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<NewsListPage />} />
        <Route path="news/:id" element={<NewsDetailPage />} />
        <Route path="add" element={<NewsFormPage />} />
        <Route path="edit/:id" element={<NewsFormPage />} />
      </Route>
    </Routes>
  );
}

export default App;
