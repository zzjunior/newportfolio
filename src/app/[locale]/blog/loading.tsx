import { Skeleton } from '@/components/ui/skeleton';

import { cn } from '@/lib/utils';

import { Header } from '@/sessions';

export default function BlogPageLoading() {
  return (
    <main className={cn('layout', 'flex flex-col gap-12')}>
      <Header />
      <div
        className={cn(
          'w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-[18px]',
        )}
      >
        {[...Array(6)].map((_, index) => (
          <Skeleton className="h-[360px] w-full lg:w-[320px]" key={index} />
        ))}
      </div>
    </main>
  );
}
