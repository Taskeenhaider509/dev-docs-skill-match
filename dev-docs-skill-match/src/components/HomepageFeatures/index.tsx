import React from "react";
// import { FaBeer, FaCoffee, FaApple } from "../../../static/img/Profile-Petrol 1.svg"; // Import icons from react-icons

interface FeatureProps {
  title: string;
  Link: string;
  description: string;
  icon: string;
}

const Companies: FeatureProps[] = [
  {
    title: "Company Sign up",
    Link: "https://dev-docs-skill-match.vercel.app/docs/gettingStarted/signup/candidate",
    description: "The company is very good",
    icon: `<svg width="55" height="38" viewBox="0 0 55 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1193 16.2761C20.0999 16.2761 22.5159 13.7571 22.5159 10.6498C22.5159 7.54243 20.0999 5.02344 17.1193 5.02344C14.1388 5.02344 11.7227 7.54243 11.7227 10.6498C11.7227 13.7571 14.1388 16.2761 17.1193 16.2761Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.9401 16.2768C40.7104 16.2768 43.7666 13.0902 43.7666 9.15935C43.7666 5.22858 40.7104 2.04199 36.9401 2.04199C33.1698 2.04199 30.1133 5.22858 30.1133 9.15935C30.1133 13.0902 33.1698 16.2768 36.9401 16.2768Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49.0819 35.9684V33.1552C49.0819 28.4854 45.4661 24.7158 40.9869 24.7158H32.8919C28.4127 24.7158 24.7969 28.4854 24.7969 33.1552V35.9684" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8198 24.7158H14.4231C9.94388 24.7158 6.32812 28.4854 6.32812 33.1552V35.9684" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
  },
  {
    title: "Company Profile Management",
    Link: "https://dev-docs-skill-match.vercel.app/docs/employerGuide/companyProfileManagement",
    description: "The company is very good",
    icon: `<svg width="55" height="47" viewBox="0 0 55 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.4742 45.0002C39.3622 45.0002 48.9992 35.3631 48.9992 23.4752C48.9992 11.5872 39.3622 1.9502 27.4742 1.9502C15.5863 1.9502 5.94922 11.5872 5.94922 23.4752C5.94922 35.3631 15.5863 45.0002 27.4742 45.0002Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.1097 40.1207C37.6896 36.5093 32.8345 34.2373 27.4532 34.2373C22.072 34.2373 17.2409 36.5093 13.7969 40.1207" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.4745 26.1537C31.1862 26.1537 34.1951 23.1453 34.1951 19.4336C34.1951 15.7219 31.1862 12.7129 27.4745 12.7129C23.7628 12.7129 20.7539 15.7219 20.7539 19.4336C20.7539 23.1453 23.7628 26.1537 27.4745 26.1537Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, // Use an icon instead of an image URL
  },
  {
    title: "Manage Job Postings",
    Link: "https://dev-docs-skill-match.vercel.app/docs/employerGuide/jobPosting",
    description: "The company is very good",
    icon: `<svg width="57" height="54" viewBox="0 0 57 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5834 32.9932H8.5V47.0766H22.5834V32.9932Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.4033 40.0346C48.4033 35.4974 44.7251 31.8193 40.188 31.8193C35.6508 31.8193 31.9727 35.4974 31.9727 40.0346C31.9727 44.5718 35.6508 48.2499 40.188 48.2499C44.7251 48.2499 48.4033 44.5718 48.4033 40.0346Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9961 22.4306L27.2769 6" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.5347 22.4306L27.2773 6" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9961 22.4307H37.5343" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, // Use an icon instead of an image URL
  },
  {
    title: "Assessment Creation",
    Link: "https://dev-docs-skill-match.vercel.app/docs/employerGuide/assessmentCreation",
    description: "The company is very good",
    icon: `<svg width="54" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.3266 5.77637L16.9844 24.1186V29.767H22.6327L40.9749 11.4247" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44.926 17.7913V33.7584C44.926 35.9539 43.1297 37.7502 40.9342 37.7502H12.9918C10.7963 37.7502 9 35.9539 9 33.7584V5.81599C9 3.62051 10.7963 1.82422 12.9918 1.82422H28.9589" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.1172 5.99595L38.7019 2.41127C39.4781 1.63505 40.7482 1.63505 41.5245 2.41127L44.3471 5.23388C45.1233 6.0101 45.1233 7.28027 44.3471 8.05649L40.7624 11.6411L35.1172 5.99595Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, // Use an icon instead of an image URL
  },
  {
    title: "Test Creation",
    Link: "https://dev-docs-skill-match.vercel.app/docs/employerGuide/testCreation",
    description: "The company is very good",
    icon: `<svg width="55" height="43" viewBox="0 0 55 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7.41699H14.6517" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.026 12.8333C23.0175 12.8333 25.4426 10.4082 25.4426 7.41665C25.4426 4.42512 23.0175 2 20.026 2C17.0345 2 14.6094 4.42512 14.6094 7.41665C14.6094 10.4082 17.0345 12.8333 20.026 12.8333Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.4414 7.41699H46.9996" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.026 12.8333C23.0175 12.8333 25.4426 10.4082 25.4426 7.41665C25.4426 4.42512 23.0175 2 20.026 2C17.0345 2 14.6094 4.42512 14.6094 7.41665C14.6094 10.4082 17.0345 12.8333 20.026 12.8333Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M47.001 21.5H40.3711" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.5366 21.5H8" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.9519 26.9163C37.9434 26.9163 40.3685 24.4912 40.3685 21.4997C40.3685 18.5081 37.9434 16.083 34.9519 16.083C31.9603 16.083 29.5352 18.5081 29.5352 21.4997C29.5352 24.4912 31.9603 26.9163 34.9519 26.9163Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.4414 35.583H46.9997" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 35.583H14.6083" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.026 41.0003C23.0175 41.0003 25.4427 38.5752 25.4427 35.5836C25.4427 32.5921 23.0175 30.167 20.026 30.167C17.0345 30.167 14.6094 32.5921 14.6094 35.5836C14.6094 38.5752 17.0345 41.0003 20.026 41.0003Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, // Use an icon instead of an image URL
  },
  {
    title: "Question Creation",
    Link: "https://dev-docs-skill-match.vercel.app/docs/employerGuide/questionCreation",
    description: "The company is very good",
    icon: `<svg width="56" height="48" viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.7649 20.9834L13.5781 38.1703" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.7812 6.17871C37.7403 9.67927 42.0674 13.9821 45.5679 18.9655" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.5453 29.3701L37.4724 36.9786C37.4724 37.5863 37.2293 38.1455 36.7917 38.5831L29.9607 45.4142C29.3287 46.0462 28.2591 45.73 28.0646 44.8792L26.0469 36.3468" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.1465 13.4471L49.678 6.0813C50.1642 3.69898 48.0493 1.584 45.667 2.07019L38.3013 3.6017C33.9013 4.52545 29.8659 6.68918 26.7056 9.87371L21.0416 15.5376C17.8814 18.6979 15.8394 22.7819 15.183 27.1819L15.0858 27.7653C14.7697 29.8803 15.4747 32.0195 17.0062 33.551L18.1974 34.7421C19.7045 36.2493 21.8438 36.9787 23.983 36.6627L24.5665 36.5653C28.9908 35.909 33.0747 33.8669 36.2106 30.7067L41.8747 25.0427C45.0593 21.8582 47.2228 17.8471 48.1465 13.4471Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.3774 14.2012L14.7686 14.2742C14.1609 14.2742 13.6018 14.5174 13.1642 14.955L6.33331 21.7858C5.70127 22.4178 6.01722 23.4875 6.86805 23.682L15.4007 25.6998" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, // Use an icon instead of an image URL
  },
];

const Candidates: FeatureProps[] = [
  {
    title: "Candidate Sign up",
    Link: "https://dev-docs-skill-match.vercel.app/docs/gettingStarted/signup/candidate",
    description: "The company is very good",
    icon: `<svg width="55" height="38" viewBox="0 0 55 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1193 16.2761C20.0999 16.2761 22.5159 13.7571 22.5159 10.6498C22.5159 7.54243 20.0999 5.02344 17.1193 5.02344C14.1388 5.02344 11.7227 7.54243 11.7227 10.6498C11.7227 13.7571 14.1388 16.2761 17.1193 16.2761Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.9401 16.2768C40.7104 16.2768 43.7666 13.0902 43.7666 9.15935C43.7666 5.22858 40.7104 2.04199 36.9401 2.04199C33.1698 2.04199 30.1133 5.22858 30.1133 9.15935C30.1133 13.0902 33.1698 16.2768 36.9401 16.2768Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49.0819 35.9684V33.1552C49.0819 28.4854 45.4661 24.7158 40.9869 24.7158H32.8919C28.4127 24.7158 24.7969 28.4854 24.7969 33.1552V35.9684" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8198 24.7158H14.4231C9.94388 24.7158 6.32812 28.4854 6.32812 33.1552V35.9684" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, // Use an icon instead of an image URL
  },
  {
    title: "Profile Management",
    Link: "https://dev-docs-skill-match.vercel.app/docs/candidateGuide/profileManagement",
    description: "The company is very good",
    icon: `<svg width="55" height="47" viewBox="0 0 55 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.4742 45.0002C39.3622 45.0002 48.9992 35.3631 48.9992 23.4752C48.9992 11.5872 39.3622 1.9502 27.4742 1.9502C15.5863 1.9502 5.94922 11.5872 5.94922 23.4752C5.94922 35.3631 15.5863 45.0002 27.4742 45.0002Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.1097 40.1207C37.6896 36.5093 32.8345 34.2373 27.4532 34.2373C22.072 34.2373 17.2409 36.5093 13.7969 40.1207" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.4745 26.1537C31.1862 26.1537 34.1951 23.1453 34.1951 19.4336C34.1951 15.7219 31.1862 12.7129 27.4745 12.7129C23.7628 12.7129 20.7539 15.7219 20.7539 19.4336C20.7539 23.1453 23.7628 26.1537 27.4745 26.1537Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, // Use an icon instead of an image URL
  },
  {
    title: "Searching for Jobs",
    Link: "https://dev-docs-skill-match.vercel.app/docs/candidateGuide/searchingForJob",
    description: "The company is very good",
    icon: `<svg width="55" height="47" viewBox="0 0 55 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.4742 45.0002C39.3622 45.0002 48.9992 35.3631 48.9992 23.4752C48.9992 11.5872 39.3622 1.9502 27.4742 1.9502C15.5863 1.9502 5.94922 11.5872 5.94922 23.4752C5.94922 35.3631 15.5863 45.0002 27.4742 45.0002Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.1097 40.1207C37.6896 36.5093 32.8345 34.2373 27.4532 34.2373C22.072 34.2373 17.2409 36.5093 13.7969 40.1207" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.4745 26.1537C31.1862 26.1537 34.1951 23.1453 34.1951 19.4336C34.1951 15.7219 31.1862 12.7129 27.4745 12.7129C23.7628 12.7129 20.7539 15.7219 20.7539 19.4336C20.7539 23.1453 23.7628 26.1537 27.4745 26.1537Z" stroke="#2DC29E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, // Use an icon instead of an image URL
  },
];
const Feature: React.FC<FeatureProps> = ({ title, Link, description, icon }) => {
  return (
    <div className="featureCard">
      <div className="featureIconContainer" dangerouslySetInnerHTML={{ __html: icon }}></div>
      <div className="featureDetails">
        <a href={Link} target="_blank" rel="noopener noreferrer" className="featureTitle">
          {title}
        </a>
        <div className="cards-description">{description}</div>
      </div>
    </div>
  );
};

export function HomeCompanyFeatures(): JSX.Element {
  return (
    <section className="features">
      <div className="container-t">
        <h2 className="landing-page-cards-heading">Popular employer topics</h2>
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
        <div className="featuresContainer">
        <h2 className="landing-page-cards-heading">Popular candidate topics</h2>
          {Candidates.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
