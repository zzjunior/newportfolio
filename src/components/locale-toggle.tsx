'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export function LocaleToggle() {
  const pathname = usePathname();
  const t = useTranslations('dock');

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          aria-label="Toggle locale"
          asChild
          className="rounded-full size-10"
          onClick={() => {}}
          size="icon"
          type="button"
          variant="ghost"
        >
          <Link
            href={
              pathname.includes('pt')
                ? pathname.replace('/pt', '/en')
                : pathname.replace('/en', '/pt')
            }
          >
            {pathname.includes('pt') ? (
              <Image
                alt="Portuguese Flag"
                className="size-4 lg:size-5"
                height={20}
                src="/flags/pt.webp"
                width={20}
              />
            ) : (
              <Image
                alt="English Flag"
                className="size-4 lg:size-5"
                height={20}
                src="/flags/en.webp"
                width={20}
              />
            )}
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{t('language')}</p>
      </TooltipContent>
    </Tooltip>
  );
}
