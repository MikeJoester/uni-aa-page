import React from 'react';
import {InformData, InformHeader} from '../../components';

import './Notification.css';

const Notification = () => {
  return (
    <div className="web__Notification">
        <InformHeader/>
        <InformData/>
    </div>
  )
}

export default Notification;