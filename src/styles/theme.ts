const breakpoints = ["480px", "768px", "992px", "1200px"];

const theme = {
  colors: {
    background: "#ffffff",
    text: "#000000",
    subTitle: "#8a8b91",
    primary: "#fe2c55",
  },
  mediaQueries: {
    xs: `@media screen and (min-width: ${breakpoints[0]})`,
    sm: `@media screen and (min-width: ${breakpoints[1]})`,
    md: `@media screen and (min-width: ${breakpoints[2]})`,
    lg: `@media screen and (min-width: ${breakpoints[3]})`,
  },
};

export default theme;
