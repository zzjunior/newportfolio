'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const t = useTranslations('dock');

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          aria-label="Toggle theme"
          className="rounded-full size-10"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          size="icon"
          type="button"
          variant="ghost"
        >
          <SunIcon className="size-5 lg:size-4 text-violet-800 dark:hidden dark:text-violet-800" />
          <MoonIcon className="hidden size-5 lg:size-4 text-violet-800 dark:block dark:text-violet-600" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{t('theme')}</p>
      </TooltipContent>
    </Tooltip>
  );
}
