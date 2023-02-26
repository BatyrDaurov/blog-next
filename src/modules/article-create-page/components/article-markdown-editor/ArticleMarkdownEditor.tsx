import { Options } from 'easymde';
import dynamic from 'next/dynamic';
import React from 'react';
import { ArticleStateType } from '../../types/ArticleStateType';
import { setArticleStateType } from '../../types/setArticleStateType';

type Props = {
  article: ArticleStateType;
  setArticle: setArticleStateType;
};
const SimpleMdeEditor = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

const ArticleMarkdownEditor = ({ article, setArticle }: Props) => {
  const options: Options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: false,
      placeholder: '* Enter text...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
        uniqueId: article.banner,
      },
    }),
    [article.banner]
  );
  const onChangeMarkdown = React.useCallback(
    (event: any) => {
      setArticle((prev) => ({
        ...prev,
        markdown: event,
      }));
    },
    [setArticle]
  );
  return (
    <SimpleMdeEditor
      onChange={onChangeMarkdown}
      value={article.markdown}
      options={options}
    />
  );
};

export default ArticleMarkdownEditor;
