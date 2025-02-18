import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

type BannerProps = {
  article: DevToArticlePageItem;
  locale: string;
};

export async function Banner({ article, locale }: BannerProps) {
  const t = await getTranslations('blog');

  return (
    <>
      <div
        className={cn(
          'rounded-lg p-1.5 border',
          'transition-all duration-300',
          'hover:border-emerald-500',
          'z-10',
        )}
      >
        <Image
          alt={`${article.title}'s cover`}
          className={cn(
            'md:h-[400px] lg:h-[480px] 2xl:h-[520px]',
            'border border-border border-t object-cover',
            'rounded-sm',
          )}
          height={1080}
          src={article.cover_image ?? 'https://picsum.photos/1920/1080.webp'}
          width={1920}
        />
      </div>
      <header
        className={cn(
          'flex flex-col lg:flex-row items-start justify-between gap-3 lg:gap-0',
          'z-10',
        )}
      >
        <hgroup className={cn('basis-3/4', 'space-y-1.5')}>
          <h1
            className={cn(
              'font-bold tracking-tighter',
              'text-3xl sm:text-4xl xl:text-5xl',
            )}
          >
            {article.title}
          </h1>
          <p
            className={cn(
              'text-sm sm:text-base text-muted-foreground',
              'line-clamp-3',
            )}
          >
            {article.description}
          </p>
        </hgroup>
        <div
          className={cn(
            'flex flex-col lg:items-end justify-end gap-1.5 lg:gap-3 basis-1/4',
          )}
        >
          <p>
            {t('posted')}{' '}
            {new Intl.DateTimeFormat(locale, {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            }).format(new Date(article.published_at))}
          </p>
          <Link href={article.url} target="_blank">
            <Button size="sm" variant="outline">
              {t('see-in')} Dev.to
            </Button>
          </Link>
        </div>
      </header>
    </>
  );
}
