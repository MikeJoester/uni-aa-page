import React from 'react';
import { PersonalHeader, PersonalContent } from '../../components';

import './PersonalInfo.css';

const PersonalInfo = () => {
  return (
    <div className="web__PersonalInfo">
        <PersonalHeader/>
        <PersonalContent />
    </div>
  )
}

export default PersonalInfo;