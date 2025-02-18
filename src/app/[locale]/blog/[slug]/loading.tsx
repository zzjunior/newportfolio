import { Skeleton } from '@/components/ui/skeleton';

import { cn } from '@/lib/utils';

export default function ArticlePageLoading() {
  return (
    <main className={cn('layout', 'flex flex-col items-start gap-6 lg:gap-12')}>
      <div className="w-full h-[240px] md:h-[400px] lg:h-[480px] 2xl:h-[520px]">
        <Skeleton className="w-full h-full" />
      </div>
      <header
        className={cn(
          'flex flex-col lg:flex-row items-start justify-between gap-3 lg:gap-0',
          'w-full',
        )}
      >
        <hgroup className={cn('w-full flex flex-col gap-3 basis-3/4')}>
          <Skeleton className="h-12 w-auto lg:w-[480px]" />
          <Skeleton className="h-6 w-auto lg:w-[640px]" />
        </hgroup>
      </header>
      <Skeleton className="min-h-[100dvh] w-full" />
    </main>
  );
}
