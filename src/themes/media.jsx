const sizes = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

const media = {
  mobile: `@media (max-width: ${sizes.mobile})`,
  tablet: `@media (max-width: ${sizes.tablet})`,
  laptop: `@media (max-width: ${sizes.laptop})`,
  desktop: `@media (max-width: ${sizes.desktop})`,
};

export default media;
