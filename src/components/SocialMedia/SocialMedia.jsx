import React from 'react';
import { AiFillMail, AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import "./socialmedia.scss";
import {motion } from 'framer-motion';

export default function SocialMediaIcons() {
    const animations = {
        div: {
            initial: {
                opacity: 0,
                y: '100%'
            },
            whileInView: {
                opacity: 1,
                y: '0%'
            },
            transition: {
                duration: 1
            }
        }
    }
    return (
        <motion.div {...animations.div} className="socialmediaicons">
            <ul>
                <li><a href="https://www.linkedin.com/in/deependraparmar" target='blank' rel='noopener noreferrer' className='linkedin'><AiFillLinkedin /></a></li>
                <li><a href="https://www.github.com/DeependraParmar" target='blank' rel='noopener noreferrer' className='github'><AiFillGithub /></a></li>
                <li><a href="https://learnlogics.page.link/RtQw" target='blank' rel='noopener noreferrer' className='youtube'><AiFillYoutube /></a></li>
                <li><a href="https://www.instagram.com/_deependra.parmar" target='blank' rel='noopener noreferrer' className='instagram'><AiFillInstagram /></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100069768416569" target='blank' rel='noopener noreferrer' className='facebook'><AiFillFacebook /></a></li>
                <li><a href="mailto:deependraparmar1@gmail.com" target='blank' rel='noopener noreferrer' className='mail'><AiFillMail /></a></li>
            </ul>
        </motion.div>
    )
}