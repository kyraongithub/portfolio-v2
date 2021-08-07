import Head from "next/head";
import MyNav from "../MyNav";
import Footer from "../Footer";
import styles from "./Layout.module.scss";
import PropTypes from "prop-types";

export default function Layout(props) {
  const { children, pageTitle } = props;
  return (
    <>
      {/* Head */}
      <Head>
        <title>NextJS Basic | {pageTitle}</title>
        <meta name="description" content="website next js basic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Content */}
      <div className={styles.container}>
        <MyNav />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string,
};

Layout.defaultProps = {
  children: undefined,
  pageTitle: "Next",
};
