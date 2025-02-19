import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Info } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

import { LinkPreview } from './acertinity-ui/link-preview';
import { Card, CardHeader } from './ui/card';

export function EducationCard({
  school,
  schoolKey,
  href,
  logoUrl,
}: EducationCardProps) {
  const t = useTranslations('education.courses');

  return (
    <Card className={cn('transition-all duration-300')}>
      <CardHeader className={cn('flex-row items-center gap-3', 'p-3')}>
        <LinkPreview aria-label={`Visit ${school} website`} url={href}>
          <Image
            alt={`${school} logo`}
            className={cn(
              'rounded-full border p-0.5 sm:p-1',
              'transition-all duration-300 ease-out hover:border-violet-500',
            )}
            height={48}
            src={logoUrl}
            width={48}
          />
        </LinkPreview>
        <hgroup className={cn('flex flex-col items-start flex-1')}>
          <h3 className={cn('text-xs sm:text-sm  font-medium')}>{school}</h3>
          <h4
            className={cn(
              'text-xs sm:text-sm text-wrap sm:max-w-full text-muted-foreground',
            )}
          >
            {t(`${schoolKey}.course`)}
          </h4>
        </hgroup>
        <Tooltip>
          <TooltipTrigger className="ml-auto block lg:hidden">
            <Info className="text-muted-foreground/30" />
          </TooltipTrigger>
          <TooltipContent>
            <p className={cn('text-muted-foreground text-[10px] sm:text-sm')}>
              {t(`${schoolKey}.location`)}
            </p>
            <p className={cn('text-muted-foreground text-[10px] sm:text-sm')}>
              {t(`${schoolKey}.endDate`)}
            </p>
          </TooltipContent>
        </Tooltip>
        <div className={cn('hidden lg:flex flex-col items-end', 'flex-grow')}>
          <p className={cn('text-muted-foreground text-[10px] sm:text-sm')}>
            {t(`${schoolKey}.location`)}
          </p>
          <p className={cn('text-muted-foreground text-[10px] sm:text-sm')}>
            {t(`${schoolKey}.endDate`)}
          </p>
        </div>
      </CardHeader>
    </Card>
  );
}
