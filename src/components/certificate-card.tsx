import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { FileText } from 'lucide-react';

import { cn } from '@/lib/utils';

import { LinkPreview } from './acertinity-ui/link-preview';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Separator } from './ui/separator';

export function CertificateCard({
  certificate,
  certificateHref,
  href,
  logoUrl,
}: CertificateCardProps) {
  const t = useTranslations('education.certificates');

  return (
    <Card className={cn('transition-all duration-300', '')}>
      <CardHeader className={cn('flex-row items-center gap-3', 'p-3')}>
        <LinkPreview
          aria-label={`Visit ${certificate} website`}
          className="w-full max-w-12"
          url={href}
        >
          <Image
            alt={`${certificate} logo`}
            className={cn(
              'rounded-full border p-0.5 sm:p-1',
              'transition-all duration-300 ease-out hover:border-emerald-500',
            )}
            height={48}
            src={logoUrl}
            width={48}
          />
        </LinkPreview>
        <h3
          className={cn(
            'flex-grow',
            'text-xs sm:text-sm font-medium text-wrap',
          )}
        >
          {certificate}
        </h3>
      </CardHeader>
      <Separator />
      <CardContent className={cn('p-3')}>
        <Link href={certificateHref}>
          <Button className={cn('w-full')} variant="secondary">
            <FileText className={cn('size-4')} /> {t('conclusion')}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
