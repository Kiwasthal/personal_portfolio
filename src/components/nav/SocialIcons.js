import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <section className="flex justify-center">
      <div className="absolute bg-rose-600"></div>
      <div></div>
      <div></div>
      <ul className="relative flex flex-col z-10">
        <li className="relative m-2">
          <a
            href="1"
            className="social-icon border-iconW border-r-iconRB border-b-iconRB rounded-lg backdrop-blur-xs before:bg-socialCol before:skew-x-45 before:translate-x-24 md:before:translate-x-28 sm:before:translate-x-32 before:duration-500  hover:before:translate-x-[-96px]"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="lg:h-5 xl:h-6" />
          </a>
        </li>
        <li className="relative m-2 ">
          <a
            href="https://github.com/Kiwasthal"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon border-iconW border-r-iconRB border-b-iconRB rounded-lg backdrop-blur-xs before:bg-socialCol before:skew-x-45 before:translate-x-24 md:before:translate-x-28 sm:before:translate-x-32 before:duration-500  hover:before:translate-x-[-96px]"
          >
            <FontAwesomeIcon icon={faGithubAlt} className="lg:h-5 xl:h-6" />
          </a>
        </li>
        <li className="relative m-2">
          <a
            href="https://www.facebook.com/imthekoul"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon border-iconW border-r-iconRB border-b-iconRB rounded-lg backdrop-blur-xs before:bg-socialCol before:skew-x-45 before:translate-x-24 md:before:translate-x-28 sm:before:translate-x-32 before:duration-500  hover:before:translate-x-[-96px]"
          >
            <FontAwesomeIcon icon={faFacebookF} className="lg:h-5 xl:h-6" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialIcons;
