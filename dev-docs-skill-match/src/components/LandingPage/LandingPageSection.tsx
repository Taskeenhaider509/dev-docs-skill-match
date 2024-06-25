import React from "react";

interface ColumnProps {
  heading: string;
  paragraph: string;
  buttonText: string;
  className: string;
  onButtonClick: () => void;
}

const LandingPage: React.FC<ColumnProps> = ({
  heading,
  paragraph,
  buttonText,
  onButtonClick,
  className
}) => {
  return (
    <div className={`column ${className}`} >
      <div className="row">
        <h2>{heading}</h2>
      </div>
      <div className="row">
        <p>{paragraph}</p>
      </div>
      <div className="row">
        <button className="roundedButton" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const LandingPageSection: React.FC = () => {
  const handleButtonClick = (column: number) => {
    alert(`Button in column ${column} clicked`);
  };

  return (
    <div className="container-landingPage">
      <div className="columnLayout">
        <LandingPage
        className=""
          heading="I'm applying"
          paragraph="If you’re a candidate, start here. Read our candidate guides to help you find your dream job."
          buttonText="Read candidate guides"
          onButtonClick={() => handleButtonClick(1)}
        />
        <LandingPage
        className="align-landingpage-right"
          heading="I'm hiring"
          paragraph="If you’re an employer, start here. Our guides are there to help you hire your dream candidates."
          buttonText="Read employer guides"
          onButtonClick={() => handleButtonClick(2)}
        />
      </div>
    </div>
  );
};

export default LandingPageSection;
