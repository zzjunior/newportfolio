'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { BLUR_FADE_DELAY } from '@/constants/blur-delay';
import { DATA } from '@/data/resume';
import useScrollPosition from '@/hooks/use-scroll-position';

import { LocaleToggle } from '../locale-toggle';
import BlurFade from '../magic-ui/blur-fade';
import { Dock, DockIcon } from '../magic-ui/dock';
import { ThemeToggle } from '../theme/theme-toggle';
import { buttonVariants } from '../ui/button';
import { Separator } from '../ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { TopButton } from './top-button';

type NavbarProps = {
  locale: string;
};

export function Navbar({ locale }: NavbarProps) {
  const path = usePathname();

  const { scrollY } = useScrollPosition();

  return (
    <div
      className={cn(
        'fixed bottom-0 inset-x-0 z-50 origin-bottom',
        'pointer-events-none',
        'mx-auto mb-4',
        'h-full max-h-14',
      )}
    >
      <div
        className={cn(
          'fixed bottom-0 inset-x-0',
          'h-16 w-full',
          'bg-gradient-to-t from-bg-background to-transparent backdrop-blur-lg',
          '[-webkit-mask-image:linear-gradient(to_top,black,transparent)]',
        )}
      />
      <Dock
        className={cn(
          'relative',
          'rounded-lg',
          'mx-auto mb-4 px-2',
          'bg-background/60 border-border backdrop-blur-md',
          'pointer-events-auto transform-gpu',
        )}
        distance={128}
        magnification={48}
      >
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  aria-label={`${item.label}'s profile`}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-10 rounded-full',
                    path === `/${locale}${item.href}` ? 'bg-foreground/10' : '',
                  )}
                  href={
                    item.href === '/' ? `/${locale}` : `/${locale}${item.href}`
                  }
                >
                  <item.icon className="size-3 lg:size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator className="h-full mx-1" orientation="vertical" />
        {DATA.contact.social.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  aria-label={`${item.label}'s profile`}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-10 rounded-full',
                  )}
                  href={item.href}
                  target="_blank"
                >
                  <item.icon className="size-3 lg:size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator className="h-full mx-1" orientation="vertical" />
        <DockIcon>
          <ThemeToggle />
        </DockIcon>
        <DockIcon>
          <LocaleToggle />
        </DockIcon>
        {scrollY > 1000 ? (
          <DockIcon
            className={cn('transition-all duration-300 hidden lg:block')}
          >
            <BlurFade delay={BLUR_FADE_DELAY} yOffset={0}>
              <TopButton />
            </BlurFade>
          </DockIcon>
        ) : null}
      </Dock>
    </div>
  );
}
