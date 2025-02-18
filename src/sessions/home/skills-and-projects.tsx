import { useTranslations } from 'next-intl';

import BlurFade from '@/components/magic-ui/blur-fade';
import { ProjectCard } from '@/components/project-card';
import { Badge } from '@/components/ui/badge';

import { cn } from '@/lib/utils';

import { BLUR_FADE_DELAY } from '@/constants/blur-delay';
import { DATA } from '@/data/resume';

export function SkillsAndProjects() {
  const t = useTranslations('skills-and-projects');

  return (
    <section id="skills-and-projects">
      <div className={cn('flex flex-col gap-3')}>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <hgroup>
            <h2 className={cn('text-2xl font-bold')}>{t('skills.title')}</h2>
            <p className={cn('text-sm text-muted-foreground')}>
              {t('skills.description')}
            </p>
          </hgroup>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h3 className={cn('text-lg font-medium')}>{t('skills.tech')}</h3>
        </BlurFade>
        <ul className={cn('flex flex-wrap gap-1.5')}>
          {DATA.skills.tech.map((skill, index) => (
            <li key={index}>
              <BlurFade
                delay={BLUR_FADE_DELAY * DATA.skills.tech.length + index * 0.05}
              >
                <Badge>{skill}</Badge>
              </BlurFade>
            </li>
          ))}
        </ul>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h3 className={cn('text-lg font-medium')}>
            {t('skills.organizational.title')}
          </h3>
        </BlurFade>
        <ul className={cn('flex flex-wrap gap-1.5')}>
          {DATA.skills.organizational.map((skill, index) => (
            <li key={index}>
              <BlurFade
                delay={BLUR_FADE_DELAY * DATA.skills.tech.length + index * 0.05}
              >
                <Badge>{t(`skills.organizational.${skill}`)}</Badge>
              </BlurFade>
            </li>
          ))}
        </ul>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h3 className={cn('text-lg font-medium')}>
            {t('skills.languages.title')}
          </h3>
        </BlurFade>
        <ul className={cn('flex flex-wrap gap-1.5')}>
          {DATA.skills.languages.map((skill, index) => (
            <li key={index}>
              <BlurFade
                delay={BLUR_FADE_DELAY * DATA.skills.tech.length + index * 0.05}
              >
                <Badge>{t(`skills.languages.${skill}`)}</Badge>
              </BlurFade>
            </li>
          ))}
        </ul>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <hgroup>
            <h2 className={cn('text-2xl font-bold')}>{t('projects.title')}</h2>
            <p className={cn('text-sm text-muted-foreground')}>
              {t('projects.description')}
            </p>
          </hgroup>
        </BlurFade>
        <ul
          className={cn('grid grid-cols-1 gap-[18px] lg:grid-cols-2 mx-auto')}
        >
          {DATA.projects.map((project, index) => (
            <li key={project.title}>
              <BlurFade
                className="h-full"
                delay={BLUR_FADE_DELAY * DATA.projects.length + index * 0.05}
              >
                <ProjectCard {...project} />
              </BlurFade>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
