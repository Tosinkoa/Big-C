import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Big-C",
  description: "Get your best and outstanding car of the year",
  keywords: "cars, car, driving, vehicle",
};
