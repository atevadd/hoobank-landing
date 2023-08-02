import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const year = new Date().getFullYear();

const Footer = () => (
  <footer
    id="footer"
    className={`footer text-white ${styles.paddingX} ${styles.paddingY}`}
  >
    <div className="flex flex-1 flex-col items-start justify-between sm:flex-row gap-10 sm:gap-0 flex-wrap  border-b border-b-[#3F3E45] pb-6">
      <div className="">
        <img
          src={logo}
          alt="hoobank logo"
          className="w-[180px] h-[50px] mb-4"
        />
        <p className="text-dimWhite text-[0.9rem]">
          A new way to make the payments <br /> easy, reliable and secure.
        </p>
      </div>
      {footerLinks.map((footer, index) => (
        <div key={index} className="flex flex-col ">
          <h4 className="font-semibold text-white mb-4">{footer.title}</h4>
          {footer.links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="mb-2 font-normal text-[0.9rem] text-dimWhite"
            >
              {link.name}
            </a>
          ))}
        </div>
      ))}
    </div>
    <div className="pt-6 flex flex-1 flex-col items-start gap-6 sm:gap-0 sm:items-center justify-between sm:flex-row">
      <p>Copyright &copy; {year} HooBank. All Rights Reserved.</p>
      <div className="flex flex-row gap-6  items-center justify-start">
        {socialMedia.map((links, index) => (
          <a key={index} href={links.link}>
            <img src={links.icon} alt={links.id} className="object-contain" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
