import React from "react";
import DynamicRenderDetails from "../../utils/dynamicRenderDetails";
import * as CategoryConfig from "../../constants/userConfig";
export default function UserDetails() {
  return (
    <DynamicRenderDetails
      config={CategoryConfig.UserDetailsConfig}
      hasSeo={false}
    />
  );
}
