import { useTranslations } from 'next-intl';

import { CertificateCard } from '@/components/certificate-card';
import { EducationCard } from '@/components/education-card';
import BlurFade from '@/components/magic-ui/blur-fade';

import { cn } from '@/lib/utils';

import { BLUR_FADE_DELAY } from '@/constants/blur-delay';
import { DATA } from '@/data/resume';

export function Education() {
  const t = useTranslations('education');

  return (
    <section id="education">
      <div className={cn('flex flex-col gap-3')}>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <hgroup>
            <h2 className={cn('text-2xl font-bold')}>{t('courses.title')}</h2>
            <p className={cn('text-sm text-muted-foreground')}>
              {t('courses.description')}
            </p>
          </hgroup>
        </BlurFade>
        <ul className={cn('flex flex-col gap-[18px]')}>
          {DATA.education.map((education, index) => (
            <li key={index}>
              <BlurFade
                delay={BLUR_FADE_DELAY * DATA.education.length + index * 0.05}
              >
                <EducationCard {...education} />
              </BlurFade>
            </li>
          ))}
        </ul>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <hgroup>
            <h2 className={cn('text-2xl font-bold')}>
              {t('certificates.title')}
            </h2>
            <p className={cn('text-sm text-muted-foreground')}>
              {t('certificates.description')}
            </p>
          </hgroup>
        </BlurFade>
        <ul className={cn('flex flex-col lg:grid lg:grid-cols-2 gap-[18px]')}>
          {DATA.certificates.map((certificate, index) => (
            <li key={index}>
              <BlurFade
                delay={BLUR_FADE_DELAY * DATA.education.length + index * 0.05}
              >
                <CertificateCard {...certificate} />
              </BlurFade>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
