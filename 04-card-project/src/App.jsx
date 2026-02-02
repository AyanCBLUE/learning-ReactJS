import React from 'react'
import Card from './component/card'


const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 55,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 75,
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 weeks ago",
    post: "Software Engineer (Autopilot)",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Mobile App Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "8 days ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 70,
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/stripe.com",
    companyName: "Stripe",
    datePosted: "10 weeks ago",
    post: "Payments Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 65,
    location: "Dublin, Ireland"
  }
];

  return (
    <div className="parent">
      {jobOpenings.map(function(elem, index){ 

        return <div key={index}>
          <Card company={elem.companyName} logo={elem.brandLogo} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
               </div>
      })}
    </div>
  )
}

export default App