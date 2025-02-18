import { useTranslations } from 'next-intl';

import { ExperienceCard } from '@/components/experience-card';
import BlurFade from '@/components/magic-ui/blur-fade';

import { cn } from '@/lib/utils';

import { BLUR_FADE_DELAY } from '@/constants/blur-delay';
import { DATA } from '@/data/resume';

export function Experience() {
  const t = useTranslations('experience');

  return (
    <section id="work-experience">
      <div className={cn('flex flex-col gap-3')}>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h2 className={cn('text-2xl font-bold')}>{t('title')}</h2>
          <p className={cn('text-sm text-muted-foreground')}>
            {t('description')}
          </p>
        </BlurFade>
        <ul className={cn('flex flex-col gap-[18px]')}>
          {DATA.experience.map((experience, index) => (
            <li key={index}>
              <BlurFade
                delay={BLUR_FADE_DELAY * DATA.experience.length + index * 0.05}
              >
                <ExperienceCard {...experience} />
              </BlurFade>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
