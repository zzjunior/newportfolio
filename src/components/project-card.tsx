/* eslint-disable jsx-a11y/media-has-caption */

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { LinkPreview } from './acertinity-ui/link-preview';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Separator } from './ui/separator';

export function ProjectCard({
  bannerImageUrl,
  videoUrl,
  skills,
  title,
  projectKey,
  href,
  links,
}: ProjectCardProps) {
  const t = useTranslations('skills-and-projects.projects');

  return (
    <Card className={cn('flex flex-col', 'h-full', 'hover:scale-105 transition-transform duration-200')}>
      <CardHeader
        className={cn(
          'relative',
          'aspect-video',
          'p-3 rounded-lg border-b',
          'group-hover:border-foreground/50',
        )}
      >
        <Link
          className={cn('w-full h-full', 'relative block cursor-pointer')}
          href={href || '#'}
        >
          {videoUrl ? (
            <video
              autoPlay={true}
              className={cn(
                'pointer-events-none rounded-sm object-cover w-full max-h-[223px]',
              )}
              loop={true}
              playsInline={true}
              preload="auto"
            >
              <source src={videoUrl} />
            </video>
          ) : null}
          {bannerImageUrl ? (
            <Image 
              alt={title}
              className="rounded-sm object-cover"
              fill={true}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={bannerImageUrl}
            />
          ) : null}
        </Link>
      </CardHeader>
      <CardHeader className={cn('p-3')}>
        <CardTitle>{title}</CardTitle>
        <time className={cn('text-xs text-muted-foreground')}>
          {t(`${projectKey}.start`)} - {t(`${projectKey}.end`)}
        </time>
        <p
          className={cn(
            'prose max-w-full text-pretty text-xs text-muted-foreground dark:prose-invert',
          )}
        >
          {t(`${projectKey}.description`)}
        </p>
      </CardHeader>
      <Separator />
      <CardContent className={cn('p-3', 'flex flex-wrap gap-1.5')}>
        {links.length > 0 ? (
          <div className="flex flex-row flex-wrap items-start gap-3">
            {links.map((link, idx) => (
              <Button asChild key={idx} size="sm" variant="outline">
                <LinkPreview url={link.href}>
                  {link.icon}
                  {link.type}
                </LinkPreview>
              </Button>
            ))}
          </div>
        ) : null}
      </CardContent>
      <Separator />
      <CardFooter className={cn('p-3', 'flex flex-wrap items-end gap-1')}>
        {skills.map((skill, index) => (
          <Badge className={cn('text-[10px]')} key={index}>
            {skill}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
