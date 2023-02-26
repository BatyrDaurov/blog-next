import { TagType } from '../../../@types/TagType';
import { setArticleStateType } from '../types/setArticleStateType';
import { setIsOpenStateType } from '../types/setIsOpenStateType';
import { setTagType } from '../types/setTagType';

export const onAddTag =
  (
    setArticle: setArticleStateType,
    setIsOpen: setIsOpenStateType,
    setTag: setTagType,
    tag: TagType
  ) =>
  () => {
    if (tag.name !== '') {
      setArticle((prev: any) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
      setIsOpen(false);
      setTag({
        name: '',
        color: '#000000',
        prefix: '#989898',
        border: '#cecece',
        background: '#eeeeee',
        hoverBorder: '#989898',
        hoverBackground: '#cecece',
      });
    }
  };
