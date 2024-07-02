import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import {
  HomeCompanyFeatures,
  HomeCandidateFeatures,
} from "@site/src/components/HomepageFeatures";
import LandingPageSection from "@site/src/components/LandingPage/LandingPageSection"
import ImproveLanding from "../components/ImproveLandingPage/ImproveLanding";
function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary header-image-bg")}>
      <div className="container input">
        <span className="header-logo">
          <svg
            style={{width: "100%"}}
            width="330"
            height="49"
            viewBox="0 0 330 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M87.7708 16.7999C86.4462 14.7537 82.8755 12.8152 78.7289 12.8152C73.3729 12.8152 70.8389 14.9152 70.8389 17.5537C70.8389 20.6768 74.7551 21.5383 79.3048 22.0229C87.2525 22.9383 94.6242 24.8768 94.6242 33.3845C94.6242 41.2999 87.1373 44.746 78.6137 44.746C70.8389 44.746 64.8493 42.4845 62.0273 36.0229L68.0169 33.1152C69.687 37.046 74.1216 38.7691 78.7289 38.7691C83.2211 38.7691 87.4828 37.3152 87.4828 33.4383C87.4828 30.0999 83.7394 28.6999 78.6713 28.2152C70.8965 27.3537 63.6975 25.4152 63.6975 17.446C63.6975 10.1229 71.4148 7.10756 78.441 7.05371C84.3729 7.05371 90.5352 8.61525 93.4148 14.1076L87.7708 16.7999Z"
              fill="white"
              className="header-logo-icon"
            />
            <path
              d="M107.811 7.26953V28.9157L117.314 18.308H125.665V18.6849L114.146 30.7465L127.277 44.2618V44.7465H118.869L107.811 32.7926V44.7465H100.785V7.26953H107.811Z"
              fill="white"
              className="header-logo-icon"
            />
            <path
              d="M137.529 10.8756C137.529 15.991 129.293 15.991 129.293 10.8756C129.293 5.76022 137.529 5.76022 137.529 10.8756ZM129.926 18.1987V44.7448H136.895V18.1987H129.926Z"
              fill="white"
              className="header-logo-icon"
            />
            <path
              d="M149.626 7.26953V44.7465H142.715V7.26953H149.626Z"
              fill="white"
              className="header-logo-icon"
            />
            <path
              d="M162.122 7.26953V44.7465H155.211V7.26953H162.122Z"
              fill="white"
              className="header-logo-icon"
            />
            <path
              d="M203.127 17.4975L190.054 33.8129H188.556L175.771 17.4437V44.7437H168.227V7.21289H176.923L189.478 23.3667L202.033 7.21289H210.672V44.7437H203.127V17.4975Z"
              fill="white"
              className="header-logo-icon"
            />
            <path
              d="M239.755 17.5001H246.436V43.9386H239.87L239.525 40.0617C237.912 43.1847 233.477 44.6924 230.368 44.7463C222.017 44.8001 215.797 39.954 215.797 30.6924C215.797 21.5924 222.247 16.8001 230.54 16.854C234.341 16.854 237.912 18.5232 239.525 21.1617L239.755 17.5001ZM222.765 30.6924C222.765 35.754 226.509 38.7155 231.116 38.7155C242.116 38.7155 242.116 22.6693 231.116 22.6693C226.509 22.7232 222.765 25.6309 222.765 30.6924Z"
              fill="white"
              className="header-logo-icon"
            />
            <path
              d="M260.431 10.499V17.9836H268.206V23.6375H260.373V35.0529C260.373 37.5836 261.871 38.8221 264.059 38.8221C265.154 38.8221 266.421 38.499 267.457 38.0144L269.415 43.6144C267.4 44.3683 265.73 44.6913 263.599 44.7452C257.436 44.9606 253.462 41.6759 253.462 35.1067V23.6375H248.164V18.0375H253.462V11.199L260.431 10.499Z"
              fill="white"
              className="header-logo-icon"
            />
            <path
              d="M297.115 40.5441C293.833 43.5595 290.435 44.7441 286.231 44.7441C278.053 44.7441 271.199 40.1134 271.199 30.7441C271.199 21.3749 277.995 16.7441 286.231 16.7441C290.262 16.7441 293.314 17.8211 296.424 20.6749L291.99 25.0364C290.32 23.6364 288.246 22.9364 286.288 22.9364C281.566 22.9364 278.168 26.1672 278.168 30.7441C278.168 35.8057 281.854 38.4441 286.173 38.4441C288.419 38.4441 290.665 37.8518 292.393 36.2365L297.115 40.5441Z"
              fill="white"
              className="header-logo-icon"
            />
            <path
              d="M306.617 7.21289V21.9129C309.151 18.8437 312.261 17.9283 315.429 17.9283C323.434 17.9283 327.004 23.0437 327.004 30.7975V44.7437H320.036V30.8514C320.036 26.0052 317.329 24.0129 313.586 24.0129C309.439 24.0129 306.617 27.2975 306.617 31.2283V44.7437H299.648V7.21289H306.617Z"
              fill="white"
              className="header-logo-icon"
            />
            <path
              d="M45.9594 7.05273L33.4045 18.7912H18.2579C18.2579 18.7912 18.2003 18.7912 18.2003 18.845V32.9527C18.2003 32.9527 18.2003 33.0066 18.1427 33.0066H17.3364C9.73431 33.0066 3.05369 27.1912 2.99609 20.0297C2.99609 16.422 4.55107 13.1912 7.0851 10.8758C9.61913 8.50658 13.0746 7.05273 16.8757 7.05273H45.9594ZM35.017 18.7912H33.4045C33.4045 18.7912 33.3469 18.7912 33.3469 18.845V32.9527C33.3469 32.9527 33.3469 33.0066 33.2893 33.0066H18.2579L5.7029 44.6912V44.745H35.4778C39.3364 44.745 42.7919 43.2912 45.2683 40.922C47.8024 38.5527 49.3574 35.322 49.3574 31.7681C49.3574 24.6066 42.6767 18.7912 35.017 18.7912Z"
              fill="white"
              className="header-logo-icon"
            />
          </svg>
        </span>
        <div className="searchBar">
          <span className="searchIcon">
            <svg
              className="searchIcon"
              width="25"
              height="25"
              fill="none"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="search-icon-color"
                cx="12.2659"
                cy="12.2669"
                r="8.98856"
                stroke="green"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
               
              />
              <path
              className="search-icon-color"
                d="M18.5195 18.9854L22.0436 22.5002"
                stroke="green"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              
              />
            </svg>
          </span>
          <input
            type="text"
            className="searchInput"
            placeholder="Search for articles"
          />
        </div>
        <div className="header-icon-heading">
          <span className="first-heading">Common troubleshooting topics: </span>
          <span className="second-heading"><a href="">notification,</a> <a href="">create assessment</a>, <a href=""> test creation </a></span>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main >
      <LandingPageSection />
        <div className="landing-page-cards">
        <HomeCandidateFeatures />
        <HomeCompanyFeatures />
        </div>
      <ImproveLanding />
      </main>
    </Layout>
  );
}
