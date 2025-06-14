import type { FC } from 'react';
import { Editor } from '@tiptap/react';
import styles from './wysiwyg-toolbar.module.scss';

export const WysiwygToolbar: FC<{ editor: Editor | null }> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className={styles.toolbar}>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? styles.isActive : ''}
      >
        Bold
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? styles.isActive : ''}
      >
        Italic
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive('heading', { level: 2 }) ? styles.isActive : ''
        }
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? styles.isActive : ''}
      >
        List
      </button>
    </div>
  );
};
