//@ts-nocheck
import { useState } from 'react';
import { tagColors } from '../../../../../constants/tags';
import { InputColor } from '../../../../../UI/inputs';
import { setArticleStateType } from '../../../types/setArticleStateType';
import { onAddTag } from '../../helpers/onAddTag';
import { onDeleteTag } from '../../helpers/onDeleteTag';
import { ArticleStateType } from '../../types/ArticleStateType';
import s from './InputTags.module.scss';

type Props = {
  setArticle: setArticleStateType;
  article: ArticleStateType;
};

const InputTags = ({ setArticle, article }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const removeBtnClassname = isOpen && `${s.remove}`;
  const [tag, setTag] = useState({
    name: '',
    color: '#000000',
    prefix: '#989898',
    border: '#cecece',
    background: '#eeeeee',
    hoverBorder: '#989898',
    hoverBackground: '#cecece',
  });

  return (
    <div className={s.wrapper}>
      <ul className={`${s.tags} list-reset`}>
        {article.tags?.map((tag, index) => (
          <li
            className={s.tag}
            key={`${tag.name}${index}`}
            onClick={onDeleteTag(setArticle, tag.name)}
            style={{
              '--prefix-color': tag.prefix,
              '--background-color': tag.background,
              '--border-color': tag.border,
              '--tag-color': tag.color,
              '--background-hover-color': tag.hoverBackground,
              '--border-hover-color': tag.hoverBorder,
            }}
          >
            <span className={s.tag__hash}>#</span>
            <span className={s.tag__text}>{tag.name}</span>
          </li>
        ))}
      </ul>
      <div className={s.buttons}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`btn-reset ${s.button} ${removeBtnClassname}`}
        >
          {isOpen ? 'Remove' : 'Add'} tag
        </button>
        {isOpen && (
          <button
            onClick={onAddTag(setArticle, setIsOpen, setTag, tag)}
            className={`btn-reset ${s.button}`}
          >
            Save tag
          </button>
        )}
      </div>
      {isOpen && (
        <div className={s.createTag}>
          <div className={s.createTag__wrapper}>
            <div className={s.createTag__input}>
              <span>#</span>
              <input
                type="text"
                value={tag.name}
                className={`input-reset ${s.createTag__name}`}
                placeholder="Enter a tag name"
                onChange={(e) =>
                  setTag((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <ul className={`${s.createTag__example} list-reset`}>
              {tag.name && (
                <li
                  className={s.tagExample}
                  style={{
                    '--prefix-color': tag.prefix,
                    '--background-color': tag.background,
                    '--border-color': tag.border,
                    '--tag-color': tag.color,
                    '--background-hover-color': tag.hoverBackground,
                    '--border-hover-color': tag.hoverBorder,
                  }}
                >
                  <span className={s.tagExample__hash}>#</span>
                  <span className={s.tagExample__text}>{tag.name}</span>
                </li>
              )}
            </ul>
          </div>
          <div className={s.createTag__colors}>
            {tagColors.map((tagColor) => (
              <InputColor
                tag={tag}
                setTag={setTag}
                key={tagColor.value}
                label={tagColor.label}
                value={tagColor.value}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InputTags;
