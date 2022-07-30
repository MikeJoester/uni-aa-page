import React from 'react'
import {
        CurriculumHeader,
        CurriculumContent
        } from '../../components'
import './Curriculum.css'

const Curriculum = () =>{
    return(
        <div className="web__CurriculumPage">
            <CurriculumHeader />
            <CurriculumContent />
        </div>
    )
}

export default Curriculum