import React from 'react'
import {
        CurriDetailsHeader,
        CurriDetailsContent
        } from '../../components'
import './CurriDetails.css'

const CurriDetails = () =>{
    return(
        <div className="web__CurriDetailsPage">
            <CurriDetailsHeader />
            <CurriDetailsContent />
        </div>
    )
}

export default CurriDetails