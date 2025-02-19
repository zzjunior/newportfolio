import { ChevronUp } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export function TopButton() {
  function scrollToTop() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          aria-label="Toggle theme"
          className={cn('rounded-full size-10')}
          onClick={scrollToTop}
          size="icon"
          type="button"
          variant="ghost"
        >
          <ChevronUp className="size-3 lg:size-4 text-violet-800 dark:text-violet-400" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Voltar para o topo</p>
      </TooltipContent>
    </Tooltip>
  );
}
