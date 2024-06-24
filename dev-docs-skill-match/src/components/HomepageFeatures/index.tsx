// src/components/HomepageFeatures.tsx
import React from 'react';
import { FaBeer, FaCoffee, FaApple } from 'react-icons/fa'; // Import icons from react-icons

interface FeatureProps {
  title: string;
  icon: React.ReactNode;
}

const Companies: FeatureProps[] = [
  {
    title: 'Onboarding and Implementation Center',
    icon: <FaBeer />, // Use an icon instead of an image URL
  },
  {
    title: 'CodeSignal Interview',
    icon: <FaCoffee />, // Use an icon instead of an image URL
  },
  {
    title: 'CodeSignal Pre-screen',
    icon: <FaApple />, // Use an icon instead of an image URL
  },
];

const Candidates: FeatureProps[] = [
  {
    title: 'CodeSignal Learn: FAQs',
    icon: <FaBeer />, // Use an icon instead of an image URL
  },
  {
    title: 'CodeSignal Interview: Candidate FAQs',
    icon: <FaCoffee />, // Use an icon instead of an image URL
  },
  {
    title: 'CodeSignal PreScreen: Candidate FAQs',
    icon: <FaApple />, // Use an icon instead of an image URL
  },
];

function Feature({ icon, title }: FeatureProps) {
  return (
    <div className="featureCard">
      <div className="featureIconContainer">
        {icon}
      </div>
      <p className="featureTitle">{title}</p>
    </div>
  );
}

export function HomeCompanyFeatures(): JSX.Element {
  return (
    <section className="features">
      <div className="container">
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
      <div className="container">
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
