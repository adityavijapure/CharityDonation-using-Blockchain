import React from 'react'
import '../styles/footer.css';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footerContainer">
                    <div class="socialIcons">
                        <a href=""><i class="fa-brands "><FaFacebook/></i></a>
                        <a href=""><i class="fa-brands "><FaInstagram/></i></a>
                        <a href=""><i class="fa-brands "><FaTelegram/></i></a>
                        <a href=""><i class="fa-brands "><FaTwitter/></i></a>
                        <a href=""><i class="fa-brands "> <FaYoutube/></i></a>
                    </div>
                    <div class="footerNav">
                        <ul><li><a href="">Home</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">our Team</a></li>
                        </ul>
                    </div>

                </div>
                
            </footer>
        </div>
    )
}

export default Footer