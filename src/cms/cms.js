import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import CommunityPostPreview from "./preview-templates/CommunityPostPreview";
// import ProductPagePreview from "./preview-templates/ProductPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";

CMS.registerPreviewTemplate("index", HomePagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
// CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", CommunityPostPreview);
