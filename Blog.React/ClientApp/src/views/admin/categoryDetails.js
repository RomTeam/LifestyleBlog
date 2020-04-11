import React from "react";
import DynamicRenderDetails from "../../utils/dynamicRenderDetails";
import * as CategoryConfig from "../../constants/categoryConfig";
export default function CategoryDetails() {
  return (
    <DynamicRenderDetails
      config={CategoryConfig.CateogryDetailsConfig}
      hasSeo={true}
    />
  );
}
