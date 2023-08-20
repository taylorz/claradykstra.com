import Head from "next/head";

const HeadComponent = ({ title, unfurlImage }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content="Clara Dykstra" />
      <meta
        property="og:site_name"
        content="Clara Dykstra"
        key="og_ClaraDykstra_site_name"
      />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta
        property="og:title"
        content={title}
        key="og_ClaraDykstra_site_title"
      />
      <meta
        property="og:description"
        content=""
        key="og_ClaraDykstra_site_description"
      />
      <meta
        property="og:image"
        content={unfurlImage}
        key="og_ClaraDykstra_site_image"
      />
    </Head>
  );
};

export default HeadComponent;
