import { Helmet } from 'react-helmet';

const default_domain = 'https://kiwasthal-portfolio';

const SEO = ({
  title,
  domain,
  description,
  webTitle = 'Panagiotis Kostopoulos Portfolio',
}) => {
  return (
    <Helmet>
      <title>Portfolio | {title}</title>
      <link rel="canonical" href={domain || default_domain} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="Porfolio,React,Redux,Tailwind,Kiwasthal,Home Page,Panagiotis ,Kostopoulos,multiscreen,responsive"
      />

      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content="Website" />
      <meta key="og_title" property="og:title" content={title} />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={webTitle} />
      <meta key="og_url" property="og:url" content={domain || default_domain} />
      <meta name="robots" content="index,follow" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />
    </Helmet>
  );
};

export default SEO;
