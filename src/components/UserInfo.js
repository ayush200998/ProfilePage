import React, {useState} from 'react'
import './UserInfo.css'
import ClientPost from './ClientPost'
import CrewPost from './CrewPost'
import SkillPost from './SkillPost'
import ProfessionPost from './ProfessionPost'
import Portfolio from './Portfolio'

function UserInfo({ basic, result }) {

    function renderClientPostings(posts){
        return <ClientPost posts={posts} />
    }

    function renderCrewPost(posts){
        return <CrewPost posts={posts} />
    }

    function renderSkillPost(posts){
        return <SkillPost posts={posts} />
    }

    function renderProfessionPost(posts){
        return <ProfessionPost posts={posts} />
    }

    function renderPortfolioPost(posts){
        return <Portfolio posts={posts} />
    }

    const[checker, setChecker] = useState({
        clientPostings: false,
        crewPostings: false,
        skills: false,
        profession: false,
        portfolio: false,
    }) 

    return (
        <div className='userinfo'>
            <div className='userinfo_scrollbar'>
                <button 
                 onClick={() => 
                    setChecker({portfolio: !checker.portfolio})}
                > 
                    Portfolio 
                </button>
                <button 
                 onClick={() => 
                    setChecker({clientPostings: !checker.clientPostings})}
                > 
                    Client Postings 
                </button>
                <button
                    onClick={() => 
                        setChecker({crewPostings: !checker.crewPostings})}
                > 
                    Crew Postings 
                </button>
                <button
                       onClick={() => 
                        setChecker({skills: !checker.skills})}
                >
                    Skills 
                </button>
                <button
                    onClick={() => 
                        setChecker({profession: !checker.profession})}
                > 
                    Professions 
                </button>
            </div>
            <div className='userinfo_details'>
                <div className='userinfo_image'>
                    <img className='userinfo_profile' src={basic.image} alt='cover' />
                    <div className='userinfo_name'>
                        <h3> {basic.name} </h3>
                        <p className ='userinfo_following'> Followings: {basic.followings} </p>
                    </div>
                </div>
                
                <div className='userinfo_bio'>
                    <h5> {basic.bio} </h5>
                </div>
            </div>
             {checker.clientPostings ? (renderClientPostings(result.client_postings)): (null)}
             {checker.crewPostings? (renderCrewPost(result.crew_postings)): (null)}
             {checker.skills? (renderSkillPost(result.skills)): (null)}
             {checker.profession? (renderProfessionPost(result.professions)): (null)}
             {checker.portfolio? (renderPortfolioPost(result.portfolio)) : (null)}
        </div>
    )
}

export default UserInfo
