import { Suspense } from 'react';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { MagicCard } from '@/components/magic-ui/magic-card';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { cn } from '@/lib/utils';

import { Skeleton } from './ui/skeleton';

export function BlogCard({
  cover_image,
  description,
  published_at,
  slug,
  title,
}: DevToArticleListItem) {
  const locale = useLocale();

  return (
    <Link href={`blog/${slug}`}>
      <MagicCard className={cn('h-full', 'transition-all duration-300')}>
        <Card className={cn('border-none bg-transparent h-full flex flex-col')}>
          <CardHeader className="p-3 rounded-lg border-b aspect-video relative">
            <div className="p-3 w-full h-full rounded-sm relative">
              <Suspense fallback={<Skeleton className="h-full w-full" />}>
                <Image
                  alt={`${title}'s cover`}
                  className="rounded-sm object-cover"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={cover_image ?? 'https://picsum.photos/1280/720.webp'}
                />
              </Suspense>
            </div>
          </CardHeader>
          <CardContent className="p-3 flex-grow">
            <CardTitle className="text-xl line-clamp-2 mb-2">{title}</CardTitle>
            <CardDescription className="line-clamp-3">
              {description}
            </CardDescription>
          </CardContent>
          <Separator />
          <CardFooter className="justify-end p-3">
            <p>
              {new Intl.DateTimeFormat(locale, {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              }).format(new Date(published_at))}
            </p>
          </CardFooter>
        </Card>
      </MagicCard>
    </Link>
  );
}
