import AccessibleTwoToneIcon from '@mui/icons-material/AccessibleTwoTone';
import React from 'react';
// Icon jpg
import AppStore from '../../img/App_Store.jpg';
import GooglePlay from '../../img/Google_play.jpg';
// Icon Socials
import FacebookIcon from '../../img/icon/facebook';
import InstagramIcon from '../../img/icon/instagram';
import YouTubeIcon from '../../img/icon/youtube';
import LogoFooter from '../../img/Logo_Footer.jpg';
// Css
import './footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-header">
      <img src={LogoFooter} alt="Logo Footer" />
      <div className="email-footer">
        <h3>Subscribe to the newsletter</h3>
        <input placeholder="E-mail" disabled />
        <button>Send</button>
      </div>
    </div>
    <div className="store-footer">
      <img src={AppStore} />
      <img src={GooglePlay} />
    </div>
    <div className="social-footer">
      <button><InstagramIcon /></button>
      <button><FacebookIcon /></button>
      <button><YouTubeIcon /></button>
    </div>
    <div className="free-footer">
      <AccessibleTwoToneIcon />
      <h2>Barrier-free ARTLAB</h2>
    </div>
    <div className="support-footer">
      <p>Newsletter Subscription</p>
      <p>Advertising Opportunities</p>
      <p>Privacy Policy</p>
      <p>Help & Support</p>
    </div>
  </footer>
);

export default Footer;

