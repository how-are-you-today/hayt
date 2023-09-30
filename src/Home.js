import React from 'react';
import './Home.css';
import pic1 from './Picture1.png';
import pic2 from './Picture2.png';
import pic3 from './Picture3.png';
function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to</h2>
      <h1 className="home-main-title">HOW ARE YOU TODAY?</h1>
      <div className='home-contents'>
        <section className="who-are-we">
          <div className="who-are-we-content">
            <h2>Who Are We?</h2>
            <p><strong>"How are you today?"</strong> is a website that originated from a community project in Soft Skill Course (SP1041) _CC18. We are here to help people with mental illness.</p>
            <p>Our slogan, "Even the smallest act can make a big difference....," embodies our belief in the power of small, compassionate gestures in mental health support.</p>
          </div>
        </section>

        <div className="home-goals">
          <h3>Our Goals</h3>
          <ul>
            <li>
              <img src={pic1} />
              <strong>Building a Supportive Community</strong>
              <div> Attracting over 1000 people, including experts and those with depression, to our fan page and website.</div>
            </li>
            <li>
              <img src={pic2} />
              <strong>Provide Information</strong>
              <div>Providing comprehensive and practical consulting information to aid depressed individuals in diagnosing their issues.</div> 
            </li>
            <li>
              <img src={pic3}  />
              <strong>Find Happiness</strong>
              <div>Assisting depressed individuals in returning to the community and rediscovering joy in their lives.</div> 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
