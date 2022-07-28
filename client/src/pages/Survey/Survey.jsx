import React from 'react';
import './Survey.css';
import { SurveyHeader, SurveyBody } from '../../components';

const Survey = () =>{
    return(
        <div className='survey'>
            <SurveyHeader/>
            <SurveyBody/>
        </div>

    )
}

export default Survey