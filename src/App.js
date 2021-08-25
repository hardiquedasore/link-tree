import './App.css';
import profilePic from '../src/profile-pic.png'

function App() {
  const onHandleClick = (link) => {
    window.location.href = link
  }

  const socialMedia = [
    {
      icon: 'fab fa-instagram',
      social: 'Instagram',
      url: 'https://www.instagram.com/hardiquedasore/'
    },
    {
      icon: 'fab fa-facebook',
      social: 'Facebook',
      url: 'https://www.facebook.com/hardiquedasore/'
    },
    {
      icon: 'fab fa-linkedin',
      social: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hardiquedasore/'
    },
    {
      icon: 'fab fa-twitter',
      social: 'Twitter',
      url: 'https://twitter.com/HardiqueDasore'
    },
    {
      icon: 'fab fa-whatsapp',
      social: 'WhatsApp',
      url: 'https://wa.me/919041228619'
    },
    {
      icon: 'far fa-envelope',
      social: 'Email',
      url: 'mailto: hardique.dasore@gmail.com'
    }
  ]

  const sideHustle = [
    {
      icon: 'fas fa-graduation-cap', 
      name: 'Shotlisted',
      url: 'http://shotlisted.com'
    },
    {
      icon: 'fas fa-lightbulb', 
      name: 'Mealennials', 
      url: 'https://www.instagram.com/mealennialsindia/'
    },
    {
      icon: 'fas fa-utensils',
      name: 'Penne for Thought',
      url: 'https://www.instagram.com/penneforthought/'
    }
  ]

  const gitHub = 'https://github.com/hardiquedasore'
  const behance = 'https://www.behance.net/hardiquedasore'

  return (
    <div className="card">
     
      <div className="glass">
        <img src={profilePic} className="logo" alt="logo" />
      </div>
     
      <div className="content">
        <h2>Hardique Dasore</h2>
        <p>Jack of all trades trying to become the king.</p>
        <div className="developer">
        <div className="work-ex">
          <span className="designation">UI Developer</span>
          <p className="company">Deloitte</p>
         </div>
         <div className="github" onClick={()=> onHandleClick(gitHub)}>
         <i className="fab fa-github" ></i>
         </div>
        </div>
      
        <div className="portfolio"  onClick={()=> onHandleClick(behance)}>
          <p className="behance">BEHANCE</p>
          <div className="profile">
            <i className="fab fa-behance-square"></i>
            <p>Designer portfolio</p>
          </div>
        </div>

          <div className="side-hustle">
            <h3>Side Hustles</h3>
          {sideHustle.map(el => (
            <div className="company-name" key={el.name} onClick={()=> onHandleClick(el.url)}>
             <h4>{el.name}</h4>
                <div className='icon'>
                <i className={el.icon} ></i>
                </div>
                </div>
        ))}
        </div>

      </div>
    
      <div className="social-media">
      {socialMedia.map(el => (
                <i className={el.icon} key={el.social} onClick={()=> onHandleClick(el.url)}></i>
        ))}
      </div>

    </div>
  );
}

export default App;
