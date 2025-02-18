import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Card } from '@/components/ui/card';

import { cn } from '@/lib/utils';

type ContentProps = {
  article: DevToArticlePageItem;
};

export function Content({ article }: ContentProps) {
  return (
    <Card className={cn('block w-full', 'p-3 lg:p-6', 'z-10')}>
      <Markdown
        className={cn(
          'max-w-full text-pretty text-sm lg:text-base text-muted-foreground text-justify lg:text-start',
          'prose dark:prose-invert',
          'prose-headings:m-0 prose-headings:mb-1.5 lg:prose-headings:mb-3  ',
          'prose-b:m-0 prose-p:mb-1.5 lg:prose-p:mb-3',
          'prose-a:m-0 prose-a:mb-1.5 lg:prose-a:mb-3',
          'prose-img:rounded-lg prose-img:border prose-img:p-0.5 lg:prose-img:p-1',
          'hover:prose-a:text-emerald-500 prose-a:transition-all prose-a:duration-300 prose-a:ease-out',
        )}
        components={{
          code({ className, children, ...rest }) {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                PreTag="div"
                customStyle={{
                  borderRadius: '0.25rem',
                  overflowX: 'scroll',
                }}
                language={match[1]}
                style={atomDark}
                {...rest}
              >
                {children}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {article.body_markdown}
      </Markdown>
    </Card>
  );
}
