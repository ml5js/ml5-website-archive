import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="features-container">
    {gridItems.map(item => (
      <div key={item.text} className="features-container__item">
        <div className="home__figureWrapper">
          <div className="home__figure">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        </div>
        {/* <p>{item.text}</p> */}
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
