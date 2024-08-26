import React from 'react'
import Ecommerce from '../../../assets/Ecommerce.png'
import RealEstate from '../../../assets/realestate.png'
import Expense from '../../../assets/Expence.png'
import ProductCart from '../../../assets/productCart.png'
import ToDoList from '../../../assets/todo.png'
import { IoIosArrowRoundForward } from "react-icons/io";

const Project = () => {
  const projectList = [
    { id: 1, ProductImg: Ecommerce, ProjectTitle: 'Ecommerce Website', technoloy: 'Html|Css|JavaScript|React.Js|Payment Integration|Firebase|Material UI', link:'https://ecommerce-vipinkm1.vercel.app/' },
    { id: 2, ProductImg: RealEstate, ProjectTitle: 'Real Estate Website', technoloy: 'Html|Css|JavaScript|React.Js|Tailwind Css|MongoDB|Firebase', link: 'https://real-estate-project-2023.vercel.app/' },
    { id: 3, ProductImg: Expense, ProjectTitle: 'Expense Tracker Application', technoloy: 'Html|Css|JavaScript|React.Js|', link: 'https://expenses-tracker-app-five.vercel.app/' },
    { id: 4, ProductImg: ProductCart, ProjectTitle: 'Ecommmerce Product Cart', technoloy: 'Html|Css|JavaScript|React.Js|', link: 'https://product-cart-r6vh.vercel.app/' },
    { id: 5, ProductImg: ToDoList, ProjectTitle: 'ToDo-List', technoloy: 'Html|Css|JavaScript|React.Js| ', link: 'https://my-todo-list-azure.vercel.app/' }
  ]
  return (
    <div className='about-border add-scroll-bar'>
      <div className='new-text-padding'>
        <p className='project-font-size'>Check Out My Latest <span className='new-project-color'>Projects</span></p>
      </div>
      <div className='new-text-padding project-quote'>
        <p className='project-font-size quote-size'>I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.</p>
      </div>
      <div className='project-container'>
        {projectList.map((projectItem, id) => (
          <div key={id} className='project-img-border'>
            <div>
              <img className='project-img-size' src={projectItem.ProductImg} />
            </div>
            <div className='about-flex-item project-flex'>
              <div>
                <p className='name-intro'>{projectItem.ProjectTitle}</p>
              </div>
              <a href={projectItem.link} target='_blank' rel='noopener noreferrer'>
              <div className='available-flex'>
            
                <p className='name-intro available-font'>Visite Site</p>
                <IoIosArrowRoundForward />
               
              </div>
              </a>
            </div>
            <div className='technology-border'>
              <p className='project-title'>Techology Used: <span className='technology'>{projectItem.technoloy}</span></p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
export default Project