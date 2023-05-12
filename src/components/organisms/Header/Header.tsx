import React from 'react';
import { useNavigate } from "react-router-dom";
import {HeaderProps} from './Header.props';
import './Header.styles.css';
import { Navbar } from '../Navbar/Navbar';

export const Header: React.FC<HeaderProps> = ({
}) => {
  const navigate = useNavigate()

  return (
    <header className='fixed'>
      <h2 className='logo-website' onClick={() => navigate('/')}>
        Finance Tools
      </h2>
      <Navbar/>
    </header>
  );
};
