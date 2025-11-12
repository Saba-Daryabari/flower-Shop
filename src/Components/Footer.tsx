import "../styles/footer.scss";
import "../styles/globals.scss";
// Type definition
type FooterLink = {
  name: string;
  url: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type footerItems = {
  customerService: FooterSection;
  company: FooterSection;
  socialMedia: FooterSection;
  archive: FooterSection;
};
const footerItems: footerItems = {
  customerService: {
    title: "Customer Service",
    links: [
      { name: "Help & Contact Us", url: "/help" },
      { name: "Returns & Refunds", url: "/returns" },
      { name: "Online Stores", url: "/stores" },
      { name: "Terms & Conditions", url: "/terms" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Blog", url: "/blog" },
      { name: "Order Tracking", url: "/order-tracking" },
      { name: "FAQ Page", url: "/faq" },
      { name: "Contact Us", url: "/contact" },
      { name: "Login", url: "/login" },
    ],
  },
  socialMedia: {
    title: "Social Media",
    links: [
      { name: "Twitter", url: "https://twitter.com/" },
      { name: "Instagram", url: "https://instagram.com/" },
      { name: "Tumblr", url: "https://tumblr.com/" },
      { name: "Pinterest", url: "https://pinterest.com/" },
    ],
  },
  archive: {
    title: "Archive",
    links: [
      { name: "Designer Shoes", url: "/designer-shoes" },
      { name: "Gallery", url: "/gallery" },
      { name: "Pricing", url: "/pricing" },
      { name: "Feature Index", url: "/features" },
      { name: "Login", url: "/login" },
      { name: "Help & Support", url: "/support" },
    ],
  },
};
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerContainer">
        {Object.values(footerItems).map((section) => (
          <div key={section.title} className="footerSection">
            <h3 className="titleName">{section.title}</h3>
            <ul className="footerLinks">
              {section.links.map((link) => (
                <li key={link.name} className="titleInfo">
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="copyright">
        <p>© {currentYear} Saba FlowerShop. All rights reserved.</p>
      </div>
    </footer>
  );
}
