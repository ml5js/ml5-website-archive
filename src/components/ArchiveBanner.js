import React from "react";

const ArchiveBanner = class extends React.Component {
  handleClick = () => {
    window.open("https://ml5js.org", "_blank", "noopener,noreferrer");
  };

  render() {
    return (
      <div className="ArchiveBanner" onClick={this.handleClick}>
        <p>This site is archived. Visit the <a href="https://ml5js.org">new ml5.js website</a> at ml5js.org 🎉</p>
      </div>
    );
  }
};

export default ArchiveBanner;