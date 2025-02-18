export function maskDevToArticlesToListItem(
  articles: DevToArticleApiResponse[],
): DevToArticleListItem[] {
  return articles.map((article) => ({
    title: article.title,
    description: article.description,
    cover_image: article.cover_image,
    slug: article.slug,
    published_at: article.published_at,
  }));
}

export function maskDevToArticlesToPageItem(
  article: DevToArticleApiResponse,
): DevToArticlePageItem {
  return {
    title: article.title,
    description: article.description,
    cover_image: article.cover_image,
    slug: article.slug,
    published_at: article.published_at,
    body_markdown: article.body_markdown,
    url: article.url,
  };
}
