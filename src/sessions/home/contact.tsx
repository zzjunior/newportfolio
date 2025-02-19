import { useTranslations } from 'next-intl';

import Markdown from 'react-markdown';

import BlurFade from '@/components/magic-ui/blur-fade';

import { cn } from '@/lib/utils';

import { BLUR_FADE_DELAY } from '@/constants/blur-delay';

export function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact">
      <div className={cn('flex flex-col items-center', 'py-6')}>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <hgroup
            className={cn('flex flex-col gap-3 items-center', 'text-center')}
          >
            <h2 className={cn('text-3xl sm:text-5xl font-bold')}>
              {t('title')}
            </h2>
            <Markdown
              className={cn(
                'prose w-full md:max-w-[100%] text-pretty text-sm sm:text-base text-muted-foreground dark:prose-invert',
                'hover:prose-a:text-violet-500 prose-a:transition-all prose-a:duration-300 prose-a:ease-out',
              )}
            >
              {t('content')}
            </Markdown>
          </hgroup>
        </BlurFade>
      </div>
    </section>
  );
}
