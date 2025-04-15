import React from 'react'
import footerContact from "../../api/footerContact.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { FaClock } from "react-icons/fa";
import { MdChat } from "react-icons/md";
const Footer = () => {
  const iconMap = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
    FaClock: <FaClock />,
    MdChat: <MdChat />,
  };
  return (
    <footer className='footer-section'>
   <div className='container grid grid-three-cols'>
    {footerContact.map((curData,index)=>{
      const {icon,title,details} = curData;
      return(<div className='footer-contact' key={index}>
        <div className='icon'>{iconMap[icon]}</div>
        <div className='footer-contact-text'>
          <p>{title}</p>
          <p>{details}</p>
        </div>
      </div>);
      
    })}
   </div>
    </footer>
  );
}

export default Footer
