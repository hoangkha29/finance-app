import React from 'react';
import { useNavigate } from "react-router-dom";
import {HomeProps} from './Home.props';
import './Home.styles.css';
import { Header } from '../../components/organisms/Header';

export const Home: React.FC<HomeProps> = ({
}) => {
  
  return (
    <div className='home-page'>
      <Header/>
      <div className='page-content'>this is Home page!!!</div>
    </div>
  );
};
