import { ReactNode } from 'react';

import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

import { firaCode } from '@/assets/fonts';

import '@/assets/globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { Navbar } from '@/components/layout/navbar';

import { DATA } from '@/data/resume';
import { Locales } from '@/i18n/request';
import { routing } from '@/i18n/routing';

type MetadataProps = {
  params: { locale: string };
};

/**
 * Generates the website's metadata
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 * @param params - Locale to insert into metadata
 * @returns Website's metadata
 */
export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);

  return {
    metadataBase: new URL(DATA.url),
    title: {
      default: DATA.name,
      template: `%s | ${DATA.name}`,
    },
    description: DATA.description,
    openGraph: {
      title: `${DATA.name}`,
      description: DATA.description,
      url: DATA.url,
      siteName: `${DATA.name}`,
      locale: locale,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: '',
      yandex: '',
    },
  };
}

type RootLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await Promise.resolve(params);
  const messages = await getMessages();

  if (!routing.locales.includes(locale as Locales)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          'min-h-[100dvh] w-full overflow-x-hidden font-sans antialiased',
          firaCode.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <TooltipProvider delayDuration={0} skipDelayDuration={300}>
              <main
                className={cn(
                  'size-full relative',
                  'dark:bg-grid-white/5 bg-grid-black/5',
                )}
              >
                <div
                  className={cn(
                    'absolute inset-0',
                    'flex items-center justify-center',
                    'pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]',
                    'dark:bg-black bg-white',
                  )}
                />
                <section className="layout">{children}</section>
                <Navbar locale={locale} />
              </main>
            </TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
