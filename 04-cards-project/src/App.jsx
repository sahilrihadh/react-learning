import React, { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const jobs = [
  {
    brandLogo: "https://cdn.vectorstock.com/i/1000v/48/30/google-logo-symbol-vector-46334830.jpg",
    company: "Google",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://static.cdnlogo.com/logos/a/86/amazon-icon_800.png",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    company: "Meta",
    datePosted: "5 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/721/721335.png",
    company: "Apple",
    datePosted: "10 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$150/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png",
    company: "Netflix",
    datePosted: "2 days ago",
    post: "Backend Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$160/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    company: "Microsoft",
    datePosted: "7 days ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$170/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/500px-Tesla_logo.png",
    company: "Tesla",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$110/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://image.similarpng.com/file/similarpng/original-picture/2020/06/Logo-nvidia-transparent-PNG.png",
    company: "NVIDIA",
    datePosted: "8 weeks ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$180/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/openai-new-logo_f252fc.png",
    company: "OpenAI",
    datePosted: "6 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$200/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Adobe-Logo-1993.jpg  ",
    company: "Adobe",
    datePosted: "3 weeks ago",
    post: "Visual Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$105/hr",
    location: "New York, USA"
  }
];


  return (
    <div className="parent">
  {jobs.map((job, idx) => (
    <Card key={idx} job={job} />
  ))}
</div>

  )
}

export default App
