import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import CompanyLogo1 from '../../assets/ulinkit-icon.png';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import JavaScript from '../../assets/JavaScript.png';
import ReactLogo from '../../assets/reactlogo.png';
import Redux from '../../assets/reduxtoolkit.png';
import Firebase from '../../assets/firebase.png';
import Ecommerce from '../../assets/Ecommerce.png'
import Expence from '../../assets/Expence.png'
import { useNavigate } from 'react-router-dom';
const Detail = () => {
  //  navigate to the project
  const navigate = useNavigate()
  //  show the list of the work experience
  const workExperience = [
    { id: 1, year: '2024-Present', companyName: 'UlinkIt', companyProfile: 'Software Developer', CompanyImage: CompanyLogo1 },
    { id: 2, year: '2019-2023', companyName: 'UlinkIt', companyProfile: 'Software Developer', CompanyImage: CompanyLogo1 },
    { id: 3, year: '2019-2023', companyName: 'UlinkIt', companyProfile: 'Software Developer', CompanyImage: CompanyLogo1 },
    { id: 4, year: '2019-2023', companyName: 'UlinkIt', companyProfile: 'Software Developer', CompanyImage: CompanyLogo1 },
    { id: 5, year: '2019-2023', companyName: 'UlinkIt', companyProfile: 'Software Developer', CompanyImage: CompanyLogo1 },
  ]
  //  show here list of my experties
  const experties = [
    { id: 1, expertiesImage: Html, expertiesTitle: 'Html' },
    { id: 2, expertiesImage: Css, expertiesTitle: 'Css' },
    { id: 3, expertiesImage: JavaScript, expertiesTitle: 'JavaScript' },
    { id: 4, expertiesImage: ReactLogo, expertiesTitle: 'React' },
    { id: 5, expertiesImage: Redux, expertiesTitle: 'Redux Toolkit' },
    { id: 6, expertiesImage: Firebase, expertiesTitle: 'Firebase' }
    
    // add more id 
  ]
  //  check more item value
  return (
    <div className='detail-border'>
      <div className=' work-experience'>
        <div className='show-work-container'>
          <div className='work-title'>
            <h2 className='font-size-title'>Work Experiences</h2>
          </div>
          {workExperience.map((experience, id) => (
            <div className='work-experience-wrapper'>
              <div key={id} className='work-experience-content'>
                <div className='year-show'>
                  <p className='compnay-profile'>{experience.year}</p>
                </div>
                <div className='company-info'>
                  <img className='company-logo' src={experience.CompanyImage} />
                  <div className='company-name'>
                    <p className='company-title'>{experience.companyName}</p>
                    <p className='company-profile'>{experience.companyProfile}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*  show experties are */}
        <div className='my-experties-container'>
          <div className='work-title'>
            <h2 className='font-size-title'>My Experties Area</h2>
          </div>
          <div className='show-experience-content'>
            {experties.map((language, id) => (
              <div key={id} className='language-logo'>
                <img className='language-size' src={language.expertiesImage} />
                <p>{language.expertiesTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  show the recent project available to show the product */}
      <div className='project-show'>
        <div className='recent-project-containerr'>
          <div className='flex-item'>
            <h2 className='font-size-title'>Recent project</h2>
            <div className='show-all-Project'  onClick={() => navigate('/project')}>
              <p>All Project</p>
              <MdOutlineArrowRightAlt />
            </div>
          </div>
          <div className='project-image'>
            <div className='ecommerce-img'>
              <a href='https://ecommerce-vipinkm1.vercel.app/'>
                <img className='ecommerce-size' src={Ecommerce} />
              </a>
            </div>
          </div>
          <div className='project-image'>
            <div className='expence-img'>
              <a href='https://expenses-tracker-app-five.vercel.app/'>
                <img className='ecommerce-size' src={Expence} />
              </a>
            </div>
          </div>
        </div>

      </div>
      {/*  start here adding the more container */}
      <div className='border-flex'></div>
    </div>
  )
}
export default Detail