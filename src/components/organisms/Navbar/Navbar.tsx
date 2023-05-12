import React from 'react';
import { useNavigate } from "react-router-dom";
import {NavbarProps} from './Navbar.props';
import './Navbar.styles.css';

export const Navbar: React.FC<NavbarProps> = ({
}) => {
  const navigate = useNavigate()
  const menuList = [
    {
      id: '1',
      href: '/',
      title: 'Home'
    },
    {
      id: '2',
      href: '/calculator',
      title: 'Tinh Lai Kep'
    }
  ]

  return (
    <div className='header-navbar'>
      {menuList.map((menu:any) => 
        <span key={menu.id} className={'item-nav'} onClick={() => navigate(menu.href)}>
          {menu.title}
        </span>
      )}
    </div>
  );
};
