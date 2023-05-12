import React from 'react';
import { useNavigate } from "react-router-dom";
import {CalculatorProps} from './Calculator.props';
import './Calculator.styles.css';
import { Header } from '../../components/organisms/Header';

export const Calculator: React.FC<CalculatorProps> = ({
}) => {
  
  return (
    <div className='calculator-page'>
      <Header/>
      <div className='page-content'>this is Calculator page!!!</div>
    </div>
  );
};
