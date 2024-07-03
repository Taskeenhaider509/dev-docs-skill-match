import React from "react";
interface ColumnProps {
  heading: string;
  paragraph: string;
  buttonText: string;
  className: string;
  link: string;
}

const LandingPage: React.FC<ColumnProps> = ({
  heading,
  paragraph,
  buttonText,
  link,
  className
}) => {
  return (
    <div className={`column ${className}`} >
      <div className="row">
        <h2 className="landing-page-section-heading">{heading}</h2>
      </div>
      <div className="row landing-page-section-paragrph">
        <p>{paragraph}</p>
      </div>
      <div className="row">
        <button className="roundedButton">
          <a className="landing-page-button-anchor" target="_blank" href={link}>{buttonText}</a>
        </button>
      </div>
    </div>
  );
};

const LandingPageSection: React.FC = () => {

  return (
    <div className="container-landingPage">
      <div className="columnLayout">
        <LandingPage
        className="align-landingpage-left"
          heading="I'm applying"
          paragraph="If you’re a candidate, start here. Read our candidate guides to help you find your dream job."
          link="https://dev-docs-skill-match.vercel.app/docs/category/candidate-guide"
          buttonText="Read candidate guides"
        />
        <LandingPage
        className="align-landingpage-right"
          heading="I'm hiring"
          paragraph="If you’re an employer, start here. Our guides are there to help you hire your dream candidates."
          link="https://dev-docs-skill-match.vercel.app/docs/category/employer-guide"
          buttonText="Read employer guides"
        />
      </div>
    </div>
  );
};

export default LandingPageSection;
