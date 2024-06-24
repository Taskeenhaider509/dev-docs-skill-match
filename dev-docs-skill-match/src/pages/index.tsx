import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import {HomeCompanyFeatures, HomeCandidateFeatures} from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { IoSearch } from "react-icons/io5";


import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container input">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="searchBar">
          <span className="searchIcon"><IoSearch /></span>
          <input
            type="text"
            className="searchInput"
            placeholder="Search"
          />
          <button className="searchButton">Search</button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomeCompanyFeatures />
        <HomeCandidateFeatures />
      </main>
    </Layout>
  );
}
