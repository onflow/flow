export { wrapPageElement } from "./gatsby-ssr";

// Fixes broken anchor link scrolling
// https://github.com/gatsbyjs/gatsby/issues/25778#issuecomment-734067757
export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash === "") {
    window.scrollTo(0, 0);
  }

  return false;
};
