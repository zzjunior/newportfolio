'use client';

import { ReactNode } from 'react';

import { useTranslations } from 'next-intl';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

import { BLUR_FADE_DELAY } from '@/constants/blur-delay';
import useMedia from '@/hooks/use-media';

import BlurFade from './magic-ui/blur-fade';

export type SectionsProps = {
  sections: {
    label: string;
    icon: ReactNode;
    children: ReactNode;
  }[];
};

export function Sections({ sections }: SectionsProps) {
  const t = useTranslations();

  const isDesktop = useMedia('(min-width: 1024px)');

  return (
    <Tabs
      className={cn(
        'relative',
        'w-full',
        'flex flex-col lg:flex-row items-center lg:items-start gap-3',
      )}
      defaultValue={sections[0].label}
      orientation="horizontal"
    >
      <BlurFade
        className={cn(
          'sticky top-3 left-0 z-10',
          'bg-muted/40 backdrop-blur-md',
          'rounded-lg',
        )}
        delay={BLUR_FADE_DELAY}
      >
        <TabsList className={cn('lg:flex-col gap-1.5 h-fit w-auto')}>
          {sections.map((section) => (
            <Tooltip key={section.label}>
              <TooltipTrigger asChild>
                <span>
                  <TabsTrigger
                    aria-label={section.label}
                    className="py-3"
                    value={section.label}
                  >
                    {section.icon}
                  </TabsTrigger>
                </span>
              </TooltipTrigger>
              <TooltipContent
                className="px-2 py-1 text-xs"
                side={isDesktop ? 'right' : 'bottom'}
              >
                {t(`${section.label}.title`)}
              </TooltipContent>
            </Tooltip>
          ))}
        </TabsList>
      </BlurFade>
      <BlurFade className="w-full flex-grow" delay={BLUR_FADE_DELAY}>
        <div
          className={cn(
            'flex-grow w-full',
            'border border-border rounded-lg',
            'p-4 lg:p-6',
            'bg-background',
          )}
        >
          {sections.map((section) => (
            <TabsContent key={section.label} value={section.label}>
              {section.children}
            </TabsContent>
          ))}
        </div>
      </BlurFade>
    </Tabs>
  );
}
