import { useEffect } from "react";
import PropTypes from "prop-types";

const Helmet = (props) => {
  document.title = "Mộc Trà - " + props.title;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>{props.children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
