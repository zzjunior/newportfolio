import { getLocale, getTranslations } from 'next-intl/server';

import { TriangleAlert } from 'lucide-react';

import { Confetti } from '@/components/magic-ui/confetti';
import ScrollProgress from '@/components/magic-ui/scroll-progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { cn } from '@/lib/utils';

import { getArticleBySlug } from '@/services/dev-to';
import { Banner, Content } from '@/sessions';

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const locale = await getLocale();
  const t = await getTranslations('blog');

  const article = await getArticleBySlug(slug);

  return (
    <>
      <ScrollProgress />
      {article ? (
        <>
          <Banner article={article} locale={locale} />
          {locale === 'pt' ? (
            <Alert className={cn('w-full')} variant="alert">
              <TriangleAlert className={cn('size-8')} />
              <div className="flex flex-col gap-1.5">
                <AlertTitle>{t('post-in-english.title')}</AlertTitle>
                <AlertDescription className={cn('opacity-75')}>
                  {t('post-in-english.description')}
                </AlertDescription>
              </div>
            </Alert>
          ) : null}
          <Content article={article} />
        </>
      ) : null}
      <Confetti />
    </>
  );
}
