import React from 'react'
import Cards from './components/cards.jsx'

const App = () => {

const jobOpenings = [
  {
    brandlogo: "https://img.icons8.com/?size=96&id=17949&format=png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://img.icons8.com/?size=96&id=PvvcWRWxRKSR&format=png",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://img.icons8.com/?size=96&id=21295&format=png",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Cloud Support Associate",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://img.icons8.com/?size=100&id=30840&format=png",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://img.icons8.com/?size=160&id=FB9cHpr7hgtM&format=png",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Data Scientist",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://img.icons8.com/?size=96&id=22989&format=png",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Azure DevOps Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://img.icons8.com/?size=100&id=34832&format=png",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Test Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://img.icons8.com/?size=96&id=yqf95864UzeQ&format=png",
    companyName: "NVIDIA",
    datePosted: "10 weeks ago",
    post: "AI Research Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png",
    companyName: "OpenAI",
    datePosted: "8 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://img.icons8.com/?size=96&id=N1tTKPEhzeBm&format=png",
    companyName: "Uber",
    datePosted: "3 days ago",
    post: "Full Stack Developer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Gurugram, India"
  }
];

  
  return (
    <>
      <div className="parent">
        {jobOpenings.map(function(elem){

          return <Cards
          logo={elem.brandlogo}
          company={elem.companyName}
          date = {elem.datePosted}
          post = {elem.post}
          tag1 = {elem.tag1}
          tag2 = {elem.tag2}
          pay = {elem.pay}
          location = {elem.location}
          />
        })}
      </div>
    </>
  )
}

export default App