import React from 'react';
import './Footer.scss';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='Footer-container'>
                <h1>RIMOWA</h1>
                <div className='Footer-content'>
                    <ul>
                        <li><Link to='/pre-owned'>PRE-OWNED</Link></li>
                        <li><Link to='/COOKIES'>COOKIES</Link></li>
                        <li><Link to='/Pressclub'>Pressclub</Link></li>
                        <li><Link to='/Legal'>Legal</Link></li>
                        <li><Link to='/Complaints'>Complaints</Link></li>
                        <li><Link to='/Find a dealer'>Find a dealer</Link></li>
                        <li><Link to='/EU tyre labels'>EU tyre labels</Link></li>
                        <li><Link to='/FAQs'>FAQs</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                        <li><Link to='/Privacy'>Privacy</Link></li>
                        <li><Link to='/Careers'>Careers</Link></li>
                        <li><Link to='/Site-Map'>Site Map</Link></li>
                        <li><Link to='/Whispers'>Whispers</Link></li>
                        <li><Link to='/Language'>Language</Link></li>
                    </ul>
                    <div className='Footer-icons'>
                        <a href="https://www.youtube.com/@RIMOWA1898"><YouTubeIcon/></a>
                        <a href="https://www.facebook.com/Rimowa"><FacebookIcon/></a>
                        <a href="https://www.instagram.com/rimowa/"><InstagramIcon/></a>
                        <a href="https://www.linkedin.com/company/rimowa"><LinkedInIcon/></a>
                        <a href="https://x.com/Rimowa"><XIcon/></a>
                    </div>
                </div>
            </div>
    );
}

export default Footer;
