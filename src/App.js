import './App.css';
import { useState, useEffect } from 'react'
import UserInfo from './components/UserInfo'

function App() {
  const[result, setResult] = useState({
    basic: {},
    blogs:[],
    client_postings:[],
    crew_postings: [],
    events: [],
    is_logged_in: false,
    locations: [],
    portfolio: [],
    professions: [],
    questions: [],
    skills: [],
  })

  useEffect(() => {
    fetch('https://crewbella.com/user/api/profile/ishanmathur')
      .then(response => response.json())
      .then(res => {
        setResult({
          basic: res.basic,
          blogs: res.blogs,
          client_postings: res.client_postings,
          crew_postings: res.crew_postings,
          events: res.events,
          is_logged_in: res.is_logged_in,
          locations: res.locations,
          portfolio: res.portfolio,
          professions: res.professions,
          questions: res.questions,
          skills: res.skills,
        })
      })
  },[])
  
  return (
    <div className="App">
      <UserInfo basic={result.basic} result={result} />
    </div>
  );
}

export default App;
