import { useTranslations } from 'next-intl';

import Markdown from 'react-markdown';

import BlurFade from '@/components/magic-ui/blur-fade';

import { cn } from '@/lib/utils';

import { BLUR_FADE_DELAY } from '@/constants/blur-delay';

export function About() {
  const t = useTranslations('about');

  return (
    <section aria-labelledby="about-heading" id="about">
      <div className={cn('flex flex-col gap-1.5')}>
        <BlurFade delay={BLUR_FADE_DELAY}>
            <h2
            className={cn('text-xl font-bold', 'text-center lg:text-start no-underline text-violet-600')}
            id="about-heading"
            >
            {t('title')}
            </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Markdown
            className={cn(
              'prose max-w-full text-pretty text-sm lg:text-base text-muted-foreground dark:prose-invert',
              'text-justify lg:text-start',
              'hover:prose-a:text-violet-500 prose-a:transition-all prose-a:duration-300 prose-a:ease-out',
            )}
          >
            {t('summary')}
          </Markdown>
        </BlurFade>
      </div>
    </section>
  );
}
