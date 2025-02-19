import { useTranslations } from 'next-intl';

import BlurFade from '@/components/magic-ui/blur-fade';

import { cn } from '@/lib/utils';

import { BLUR_FADE_DELAY } from '@/constants/blur-delay';

export function Header() {
  const t = useTranslations('blog');

  return (
    <section aria-labelledby="blog-heading" id="blog-header">
      <hgroup
        className={cn(
          'flex flex-col gap-3 flex-1',
          'w-full',
          'text-center lg:text-start',
        )}
      >
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1
            className={cn(
              'font-bold tracking-tighter',
              'text-3xl sm:text-4xl xl:text-5xl',
            )}
          >
            Posts
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <p className={cn('text-sm sm:text-base text-muted-foreground')}>
            {t('description')}
          </p>
        </BlurFade>
      </hgroup>
    </section>
  );
}
