import React from "react";
import PropTypes from "prop-types";
import { CommunityPostTemplate } from "../../templates/community-post";

const CommunityPostPreview = ({ entry, widgetFor }) => (
  <CommunityPostTemplate
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    tags={entry.getIn(["data", "tags"])}
    title={entry.getIn(["data", "title"])}
  />
);

CommunityPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default CommunityPostPreview;
