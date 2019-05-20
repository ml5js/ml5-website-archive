import React from "react";
import PropTypes from "prop-types";

const ResponsiveIframe = ({ url, title }) => (
  <div className="iframe__container">
    <iframe src={url} title={title} allowFullScreen />
  </div>
);

ResponsiveIframe.propTypes = {
  url: PropTypes.string
};

export default ResponsiveIframe;
