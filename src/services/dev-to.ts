import {
  maskDevToArticlesToListItem,
  maskDevToArticlesToPageItem,
} from '@/lib/masks';

import { env } from '@/config/env';
import { getRequest } from '@/helpers/requests';

/**
 * Fetches articles for the authenticated user from the Dev.to API.
 *
 * @returns A promise that resolves to an array of articles.
 * @throws Throws an error if the request fails.
 */
export async function getArticles() {
  try {
    const articles = await getRequest<DevToArticleApiResponse[]>(
      'articles/me',
      {
        headers: {
          'api-key': env.DEV_TO_API_KEY,
        },
      },
    );

    const maskedArticles = maskDevToArticlesToListItem(articles);

    return maskedArticles;
  } catch (error) {
    // TODO: Improve error handling
    console.error(error);
  }
}

/**
 * Fetches a specific article by its slug from the Dev.to API.
 *
 * @param slug - The slug of the article to fetch.
 */
export async function getArticleBySlug(slug: string) {
  try {
    const article = await getRequest<DevToArticleApiResponse>(
      `articles/h3rmel/${slug}`,
      {
        headers: {
          'api-key': env.DEV_TO_API_KEY,
        },
      },
    );

    const maskedArticle: DevToArticlePageItem =
      maskDevToArticlesToPageItem(article);

    return maskedArticle;
  } catch (error) {
    // TODO: Improve error handling
    console.error(error);
  }
}
