import React from 'react'
import {images} from '../../../../constants';
import {
    Stack,
    IconButton,
} from "@mui/material";

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

import './memory.css'

const HomeMemory = () =>{
    return(
        <div className="Home__memory">
                <div className="memory__container">
                    <div className="memory__media">
                        <figure>
                            <img className="memory__img" src={images.memory1} alt="" />
                            <figcaption>
                                <p className="memory__title">Graduation Ceremony K18 #VNUK2002#K18</p>
                                <a href="/">VIEW ON FACEBOOK</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="memory__media">
                        <figure>
                            <img className="memory__img" src={images.memory2} alt="" />
                            <figcaption>
                                <p className="memory__title">Graduation Ceremony K18 #VNUK2002#K18</p>
                                <a href="/">VIEW ON FACEBOOK</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="memory__media">
                        <figure>
                            <img className="memory__img" src={images.memory3} alt="" />
                            <figcaption>
                                <p className="memory__title">Graduation Ceremony K18 #VNUK2002#K18</p>
                                <a href="/">VIEW ON FACEBOOK</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="memory__media">
                        <figure>
                            <img className="memory__img" src={images.memory4} alt="" />
                            <figcaption>
                                <p className="memory__title">Graduation Ceremony K18 #VNUK2002#K18</p>
                                <a href="/">VIEW ON FACEBOOK</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="memory__media">
                        <figure>
                            <img className="memory__img" src={images.memory5} alt="" />
                            <figcaption>
                                <p className="memory__title">Graduation Ceremony K18 #VNUK2002#K18</p>
                                <a href="/">VIEW ON FACEBOOK</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="social__media">
                    <Stack direction="row" spacing={3} justifyContent="center" sx={{width:'100%'}}>
                        <IconButton>
                            <TwitterIcon fontSize="large"/>
                        </IconButton>
                        <IconButton>
                            <FacebookIcon fontSize="large"/>
                        </IconButton>
                        <IconButton>
                            <YouTubeIcon fontSize="large"/>
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon fontSize="large"/>
                        </IconButton>
                    </Stack>
                </div>
            </div>

    )
}

export default HomeMemory