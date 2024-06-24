// src/components/HomepageFeatures.tsx
import React from "react";
import { FaBeer, FaCoffee, FaApple } from "react-icons/fa"; // Import icons from react-icons

interface FeatureProps {
  title: string;
  Link: string;
  icon: React.ReactNode;
}

const Companies: FeatureProps[] = [
  {
    title: "Company Sign up",
    Link: "https://dev-docs-skill-match.vercel.app/docs/gettingStarted/signup/candidate",
    icon: <FaBeer />, // Use an icon instead of an image URL
  },
  {
    title: "Company Profile Management",
    Link: "https://dev-docs-skill-match.vercel.app/docs/employerGuide/companyProfileManagement",
    icon: <FaCoffee />, // Use an icon instead of an image URL
  },
  {
    title: "Manage Job Postings",
    Link: "https://dev-docs-skill-match.vercel.app/docs/employerGuide/jobPosting",
    icon: <FaApple />, // Use an icon instead of an image URL
  },
  {
    title: "Assessment Creation",
    Link: "https://dev-docs-skill-match.vercel.app/docs/employerGuide/assessmentCreation",
    icon: <FaApple />, // Use an icon instead of an image URL
  },
  {
    title: "Test Creation",
    Link: "https://dev-docs-skill-match.vercel.app/docs/employerGuide/testCreation",
    icon: <FaApple />, // Use an icon instead of an image URL
  },
  {
    title: "Question Creation",
    Link: "https://dev-docs-skill-match.vercel.app/docs/employerGuide/questionCreation",
    icon: <FaApple />, // Use an icon instead of an image URL
  }
];

const Candidates: FeatureProps[] = [
  {
    title: "Candidate Sign up",
    Link: "https://dev-docs-skill-match.vercel.app/docs/gettingStarted/signup/candidate",
    icon: <FaBeer />, // Use an icon instead of an image URL
  },
  {
    title: "Profile Management",
    Link: "https://dev-docs-skill-match.vercel.app/docs/candidateGuide/profileManagement",
    icon: <FaCoffee />, // Use an icon instead of an image URL
  },
  {
    title: "Searching for Jobs",
    Link: "https://dev-docs-skill-match.vercel.app/docs/candidateGuide/searchingForJob",
    icon: <FaApple />, // Use an icon instead of an image URL
  }
];

function Feature({ icon, title, Link }: FeatureProps) {
  return (
    <div className="featureCard">
      <div className="featureIconContainer">{icon}</div>
      <a href={Link} target="_blank" className="featureTitle">
        {title}
      </a>
    </div>
  );
}

export function HomeCompanyFeatures(): JSX.Element {
  return (
    <section className="features">
      <div className="container-t">
        <h2>For Companies</h2>
        <div className="featuresContainer">
          {Companies.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeCandidateFeatures(): JSX.Element {
  return (
    <section className="features">
      <div className="container-t">
        <h2>For Candidates</h2>
        <div className="featuresContainer">
          {Candidates.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
