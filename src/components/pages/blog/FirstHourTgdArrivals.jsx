'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';
import { post } from '../../../data/blog/first-hour-tgd-arrivals';

export default function FirstHourTgdArrivals() {
  const { localePath } = useTranslation();
  // Replace {{LP:/path}} placeholders with locale-prefixed paths at render time.
  const bodyHtml = post.bodyHtml.replace(/\{\{LP:([^}]+)\}\}/g, (_, p) => localePath(p));
  return (
    <ContentPage
      title={post.title}
      subtitle={post.subtitle}
      description={post.description}
      image={post.image}
    >
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </ContentPage>
  );
}
