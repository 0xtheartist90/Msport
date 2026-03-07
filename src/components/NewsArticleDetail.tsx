"use client";

import Image from 'next/image';
import Link from 'next/link';

import { ArticleGallery } from '@/components/ArticleGallery';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedNewsItems } from '@/lib/localized-content';

const newsDetailCopy = {
  EN: {
    back: 'Back to News',
    related: 'Related Articles',
    notFound: 'Article not found'
  },
  TH: {
    back: 'กลับไปหน้าข่าวสาร',
    related: 'บทความที่เกี่ยวข้อง',
    notFound: 'ไม่พบบทความ'
  },
  KO: {
    back: '뉴스로 돌아가기',
    related: '관련 기사',
    notFound: '기사를 찾을 수 없습니다'
  },
  ZH: {
    back: '返回新闻页',
    related: '相关文章',
    notFound: '未找到文章'
  },
  JA: {
    back: 'ニュース一覧へ戻る',
    related: '関連記事',
    notFound: '記事が見つかりません'
  }
} as const;

type NewsArticleDetailProps = {
  slug: string;
};

export function NewsArticleDetail({ slug }: NewsArticleDetailProps) {
  const { language } = useLanguage();
  const copy = newsDetailCopy[language];
  const localizedNewsItems = getLocalizedNewsItems(language);
  const article = localizedNewsItems.find(item => item.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-white px-6 py-24 text-center">
        <p className="text-lg font-semibold text-[#131310]">{copy.notFound}</p>
      </main>
    );
  }

  const relatedArticles = localizedNewsItems
    .filter(item => item.slug !== article.slug)
    .slice(0, 3);

  type ContentBlock = { type: 'paragraph'; value: string } | { type: 'list'; items: string[] };
  const contentBlocks: ContentBlock[] = [];
  let currentList: string[] | null = null;

  article.body.forEach(paragraph => {
    if (paragraph.trim().startsWith('•')) {
      if (!currentList) {
        currentList = [];
        contentBlocks.push({ type: 'list', items: currentList });
      }
      currentList.push(paragraph.replace(/^•\s*/, ''));
    } else {
      currentList = null;
      contentBlocks.push({ type: 'paragraph', value: paragraph });
    }
  });

  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[58vh] min-h-[440px] overflow-hidden pt-0">
        <Image src={article.image} alt={article.title} fill className="object-cover" priority />
      </section>

      <div className="mx-auto max-w-6xl px-6 pt-6">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-[#403c34] transition-colors hover:text-[#af5a4a]"
        >
          ← {copy.back}
        </Link>
      </div>

      <section className="py-6 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
            <article className="text-lg leading-relaxed text-[#2a2823]">
              <div className="max-w-2xl space-y-4 pb-4">
                <p className="text-sm uppercase tracking-[0.5em] text-[var(--accent)]">{article.badge}</p>
                <h1 className="text-[clamp(3rem,5vw,4rem)] font-black leading-[1.02] text-[#131310]">
                  {article.title}
                </h1>
                <p className="text-xs uppercase tracking-[0.35em] text-[#8f8778]">{article.date}</p>
              </div>
              <div className="max-w-2xl space-y-6">
                {contentBlocks.map((block, index) => {
                  const isParagraph = block.type === 'paragraph';
                  const paragraphContent = isParagraph ? block.value : null;
                  const shouldInsertGallery = isParagraph && article.gallery?.length && index === 1;

                  return (
                    <div key={`${block.type}-${index}`} className="space-y-6">
                      {isParagraph ? (
                        <p>{paragraphContent}</p>
                      ) : (
                        <div>
                          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-[#3f3c36]">
                            {block.items.map(item => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {shouldInsertGallery && article.gallery ? (
                        <div className="pt-4">
                          <ArticleGallery images={article.gallery} title={article.title} />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </article>

            {relatedArticles.length > 0 ? (
              <aside className="space-y-4 lg:sticky lg:top-32 lg:h-fit lg:border-l lg:border-[#d0c8ba] lg:pl-10">
                <div className="space-y-1">
                  <p className="text-[0.6rem] uppercase tracking-[0.6em] text-[#5b554b]">{copy.related}</p>
                  <div className="h-px w-8 bg-[#d9d1c1]" aria-hidden="true" />
                </div>
                {relatedArticles.map(item => (
                  <Link
                    key={item.slug}
                    href={`/news/${item.slug}`}
                    className="group block rounded-2xl border border-[#e3e0d7] bg-white/90 p-4 shadow-[0_10px_25px_rgba(0,0,0,0.04)] ring-1 ring-white/60 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="relative mb-3 h-32 w-full overflow-hidden rounded-[14px] border border-[#e7e2d8] bg-gradient-to-b from-[#f6f6f3] to-white">
                      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-[0.58rem] uppercase tracking-[0.45em] text-[var(--accent)]">{item.badge}</p>
                      <h3 className="text-lg font-semibold leading-snug text-[#131310] transition-colors group-hover:text-[var(--accent)]">
                        {item.title}
                      </h3>
                      <p className="text-[0.55rem] uppercase tracking-[0.45em] text-[#8f8778]">{item.date}</p>
                      <p className="line-clamp-3 text-sm text-[#4d4a43]">{item.description}</p>
                      <div className="h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" aria-hidden="true" />
                    </div>
                  </Link>
                ))}
              </aside>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
