import { type FC, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import styles from './wysiwyg-editor.module.scss';
import { WysiwygToolbar } from '../wysiwyg-toolbar';

export interface WysiwygEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const WysiwygEditor: FC<WysiwygEditorProps> = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        code: false,
        codeBlock: false,
      }),
    ],

    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: styles.editorContent,
      },
    },
  });

  useEffect(() => {
    if (editor && editor.getHTML() !== value) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  return (
    <div className={styles.editorWrapper}>
      <WysiwygToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
