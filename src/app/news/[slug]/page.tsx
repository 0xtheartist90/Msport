import { notFound } from 'next/navigation';

import { NewsArticleDetail } from '@/components/NewsArticleDetail';
import { newsItems } from '@/lib/site-content';

interface NewsArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return newsItems.map(article => ({ slug: article.slug }));
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const articleExists = newsItems.some(item => item.slug === slug);

  if (!articleExists) {
    notFound();
  }

  return <NewsArticleDetail slug={slug} />;
}
