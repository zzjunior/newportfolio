import { useTranslations } from 'next-intl';

import BlurFade from '@/components/magic-ui/blur-fade';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

import { BLUR_FADE_DELAY } from '@/constants/blur-delay';
import { DATA } from '@/data/resume';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section aria-labelledby="hero-heading" id="hero">
      <div
        className={cn(
          'flex flex-col-reverse lg:flex-row items-center gap-3 lg:gap-1.5 justify-between',
        )}
      >
        <hgroup
          className={cn(
            'flex flex-col gap-3 flex-1',
            'max-w-3xl w-full',
            'text-center lg:text-start',
          )}
        >
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1
              className={cn(
                'font-bold tracking-tighter',
                'text-3xl sm:text-4xl xl:text-5xl',
                'lg:flex lg:flex-col',
              )}
            >
              {`${t('hello')}`} <span>{DATA.name} 🎯</span>
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <p className={cn('text-sm sm:text-base')}>{t('description')}</p>
          </BlurFade>
        </hgroup>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar
                className={cn(
                  'size-32 border p-1 transition-all duration-300 ease-out hover:border-violet-500',
                )}
              >
                <AvatarImage
                  alt={`${t('photoAlt')} ${DATA.name}`}
                  className={cn('rounded-full')}
                  src={DATA.avatarUrl}
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p className={cn('text-xl')}> Eaí! Tudo bem?</p>
            </TooltipContent>
          </Tooltip>
        </BlurFade>
      </div>
    </section>
  );
}
