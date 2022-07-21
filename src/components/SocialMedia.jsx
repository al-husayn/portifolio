import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href='https://github.com/al-husayn'>
                <BsGithub />
            </a>
        </div>
        <div>
            <a href='https://twitter.com/al_drake3'>
                <BsTwitter />
            </a>
        </div>

        {/* <div>
            <a href='https://www.instagram.com/al_drake3/'>
                <BsInstagram />
            </a>
        </div> */}
        <div>
            <a href='https://www.youtube.com/channel/UCc19yVrMKZ9tCy40hWEc3BA'>
                <FaYoutube />
            </a>
        </div>
        {/* <div>
            <a href='https://www.facebook.com/kelson.keen'>
                <FaFacebookF />
            </a>
        </div> */}
    </div>
);

export default SocialMedia;