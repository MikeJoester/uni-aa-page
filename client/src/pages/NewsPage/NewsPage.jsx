import React from 'react';
import './NewsPage.css';
import { NewHeader, NewsBody } from '../../components';

const NewsPage = () =>{
    return(
        <div className='new'>
            <NewHeader/>
            <NewsBody/>
        </div>

    )
}

export default NewsPage