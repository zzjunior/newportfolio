import { getTranslations } from 'next-intl/server';

import { Info } from 'lucide-react';

import { BlogCard } from '@/components/blog-card';
import { Alert, AlertTitle } from '@/components/ui/alert';

import { cn } from '@/lib/utils';

import { getArticles } from '@/services/dev-to';

// TODO: add pagination when necessary (problably in the future when we have like 12+ articles)
export async function BlogList() {
  const articles = await getArticles();

  const t = await getTranslations('blog');

  return (
    <section aria-labelledby="posts-list" id="posts-list">
      {articles && articles.length > 0 ? (
        <div
          className={cn(
            'w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-[18px]',
          )}
        >
          {articles.map((article) => (
            <BlogCard key={article.slug} {...article} />
          ))}
        </div>
      ) : (
        <Alert>
          <Info />
          <AlertTitle>{t('no-posts')}</AlertTitle>
        </Alert>
      )}
    </section>
  );
}
