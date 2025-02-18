import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Info } from 'lucide-react';

import { cn } from '@/lib/utils';

import { LinkPreview } from './acertinity-ui/link-preview';
import { Card, CardContent, CardHeader } from './ui/card';
import { Separator } from './ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export function ExperienceCard({
  company,
  companyKey,
  href,
  logoUrl,
}: ExperienceCardProps) {
  const t = useTranslations('experience');

  return (
    <Card className={cn('transition-all duration-300')}>
      <CardHeader className={cn('flex-row items-center gap-3', 'p-3')}>
        <LinkPreview aria-label={`Visit ${company} website`} url={href}>
          <Image
            alt={`${company} logo`}
            className={cn(
              'rounded-full border p-0.5 sm:p-1',
              'transition-all duration-300 ease-out hover:border-emerald-500',
            )}
            height={48}
            src={logoUrl}
            width={48}
          />
        </LinkPreview>
        <hgroup className={cn('flex flex-col items-start')}>
          <h3 className={cn('text-xs sm:text-sm font-medium')}>{company} </h3>
          <h4 className={cn('text-xs sm:text-sm text-wrap sm:max-w-full')}>
            {t(`${companyKey}.title`)}
          </h4>
        </hgroup>
        <Tooltip>
          <TooltipTrigger className="ml-auto block border-0 lg:hidden">
            <Info className="text-muted-foreground/30 size-5 mb-1" />
          </TooltipTrigger>
          <TooltipContent>
            <p className={cn('text-muted-foreground text-[10px] sm:text-sm')}>
              {t(`${companyKey}.location`)}
            </p>
            <p className={cn('text-muted-foreground text-[10px] sm:text-sm')}>
              {t(`${companyKey}.start`)} - {t(`${companyKey}.end`)}
            </p>
          </TooltipContent>
        </Tooltip>
        <div className={cn('hidden lg:flex flex-col items-end', 'flex-grow')}>
          <p className={cn('text-muted-foreground text-[10px] sm:text-sm')}>
            {t(`${companyKey}.location`)}
          </p>
          <p className={cn('text-muted-foreground text-[10px] sm:text-sm')}>
            {t(`${companyKey}.start`)} - {t(`${companyKey}.end`)}
          </p>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className={cn('lg:ml-[60px]', 'p-3')}>
        <p className={cn('text-xs lg:text-sm text-muted-foreground')}>
          {t(`${companyKey}.description`)}
        </p>
      </CardContent>
    </Card>
  );
}
