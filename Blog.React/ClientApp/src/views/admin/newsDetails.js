import React from "react";
import DynamicRenderDetails from "../../utils/dynamicRenderDetails";
import * as NewsConfig from "../../constants/newsConfig";
export default function UserDetails() {
  return (
    <DynamicRenderDetails
      config={NewsConfig.NewsDetailsConfig}
      hasSeo={true}
    />
  );
}
