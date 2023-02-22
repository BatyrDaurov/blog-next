import Select from 'react-select';
import s from './ArticlesFilters.module.scss';

type Props = {
  results: number;
};

const ArticlesFilters = ({ results }: Props) => {
  const options = [
    { value: 'latest', label: 'Latest' },
    { value: 'views', label: 'Views' },
  ];
  const options2 = [
    { value: 'react', label: '#React' },
    { value: 'docker', label: '#Docker' },
  ];
  return (
    <div className={s.filters}>
      <h1>Articles</h1>
      <div className={s.filters__options}>
        <div className={s.filter}>
          <Select placeholder="Sort by..." options={options} />
        </div>
        <div className={s.filter}>
          <Select placeholder="Tags..." options={options2} />
        </div>
      </div>
      <span>{results} results</span>
    </div>
  );
};

export default ArticlesFilters;
