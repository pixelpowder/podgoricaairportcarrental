'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

function renderHTML(str) {
  // Supports inline <strong>...</strong> and <em>...</em>
  return { __html: str };
}

export default function BlogRenderer({ content }) {
  const { lang, localePath } = useTranslation();
  const data = content[lang] || content.en;
  const { title, subtitle, description, image, sections } = data;

  return (
    <ContentPage title={title} subtitle={subtitle} description={description} image={image}>
      {sections.map((s, i) => {
        switch (s.type) {
          case 'h2':
            return <h2 key={i}>{s.text}</h2>;
          case 'h3':
            return <h3 key={i}>{s.text}</h3>;
          case 'p':
            return <p key={i} dangerouslySetInnerHTML={renderHTML(s.text)} />;
          case 'img':
            return <img key={i} src={s.src} alt={s.alt} loading="lazy" />;
          case 'ul':
            return (
              <ul key={i}>
                {s.items.map((it, j) => (
                  <li key={j}>
                    {it.label && <strong>{it.label}</strong>}{it.label ? ' ' : ''}
                    <span dangerouslySetInnerHTML={renderHTML(it.text)} />
                  </li>
                ))}
              </ul>
            );
          case 'link-p': {
            // Paragraph containing an internal link. Fields: before, linkText, href, after
            return (
              <p key={i}>
                <span dangerouslySetInnerHTML={renderHTML(s.before || '')} />
                {s.before ? ' ' : ''}
                <a href={localePath(s.href)}>{s.linkText}</a>
                {s.after ? ' ' : ''}
                <span dangerouslySetInnerHTML={renderHTML(s.after || '')} />
              </p>
            );
          }
          case 'route-info':
            return (
              <div key={i} className="route-info">
                <h3>{s.title}</h3>
                <div className="route-info__grid">
                  {s.items.map((it, j) => (
                    <div key={j} className="route-info__item">
                      <strong>{it.label}</strong>
                      {it.value}
                    </div>
                  ))}
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </ContentPage>
  );
}
