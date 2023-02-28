import { GetServerSideProps } from 'next';
import { dehydrate } from 'react-query';
import { CategoriesType } from '../../@types';
import { PrimaryLayout } from '../../components';
import { setUserData } from '../../modules/pages/authorization-page/store/slice';
import { CategoryPage, queryCategory } from '../../modules/pages/category-page';
import { wrapper } from '../../store';
import checkAuth from '../../utils/checkAuth';

type Props = {
  category: CategoriesType;
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      await checkAuth(ctx, store, setUserData);
      const { id }: any = ctx.params;
      const queryClient = await queryCategory(id);

      return {
        props: { category: dehydrate(queryClient).queries[0].state.data },
      };
    } catch (error) {
      return {
        props: { category: null },
      };
    }
  });

const Category = ({ category }: Props) => {
  return (
    <PrimaryLayout title={`${category.title} category | Batyr.blog`}>
      <main>
        <CategoryPage category={category} />
      </main>
    </PrimaryLayout>
  );
};

export default Category;
