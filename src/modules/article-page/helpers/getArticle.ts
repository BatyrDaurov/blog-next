import { NextRouter } from 'next/router';

export function getArticle(side: string, router: NextRouter) {
  const { id } = router.query;
  let prevArticle = Number(id);
  let nextArticle;

  if (id) {
    nextArticle = prevArticle + 1;
  } else if (prevArticle > 2) {
    prevArticle = prevArticle - 1;
  }

  if (side === 'next') {
    return String(nextArticle);
  } else {
    return String(prevArticle);
  }
}
