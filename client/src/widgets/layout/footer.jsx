import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

export function Footer({ title, description, socials, menus, id }) {
  return (
    <footer id={id} className="relative px-4 pt-16 pb-12 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-10 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h3" className="mb-6 text-white" color="white">
              {title}
            </Typography>
            <Typography className="font-normal text-gray-300 lg:w-2/5 text-xl">
              {description}
            </Typography>
          </div>
          {/* Only one menu section, center it for balance */}
          <div className="mx-auto mt-16 grid w-max grid-cols-1 gap-0 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="h4"
                  color="white"
                  className="mb-6 block font-bold uppercase text-white"
                >
                  Our Socials
                </Typography>
                <ul className="mt-4">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="h4"
                        className="mb-7 block font-bold text-gray-100 hover:text-white text-2xl"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Learn More About Us!",
  description:
    "Check out our Social Media and make sure to give us a follow",
  socials: [
    {
      color: "gray",
      name: "twitter",
      path: "https://www.twitter.com/creativetim",
    },
    {
      color: "gray",
      name: "youtube",
      path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
    {
      color: "gray",
      name: "instagram",
      path: "https://www.instagram.com/creativetimofficial/",
    },
    {
      color: "black",
      name: "github",
      path: "https://github.com/creativetimofficial/material-tailwind",
    },
  ],
  menus: [
    {
      name: "Our Socials",
      items: [
        { name: "Instagram", path: "https://www.instagram.com/teamdribbl/" },
        { name: "Linkedin", path: "https://www.linkedin.com/company/dribbl1/" },
      ],
    },
  ],
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
