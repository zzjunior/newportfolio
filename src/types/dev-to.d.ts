/* eslint-disable @typescript-eslint/indent */

type DevToUserApiResponse = {
  name: string;
  username: string;
  twitter_username: string | null;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
};

type DevToArticleApiResponse = {
  type_of: string;
  id: number;
  title: string;
  description: string;
  published: boolean;
  published_at: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: string;
  body_markdown: string;
  positive_reactions_count: number;
  cover_image: string | null;
  tag_list: string[];
  canonical_url: string;
  reading_time_minutes: number;
  user: DevToUser;
};

type DevToArticleListItem = Pick<
  DevToArticleApiResponse,
  'title' | 'description' | 'slug' | 'cover_image' | 'published_at'
>;

type DevToArticlePageItem = Pick<
  DevToArticleApiResponse,
  | 'title'
  | 'description'
  | 'slug'
  | 'cover_image'
  | 'published_at'
  | 'url'
  | 'body_markdown'
>;
