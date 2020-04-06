import React from "react";
// @material-ui/core components
import * as Config from "../../constants/categoryConfig";
import DynamicRenderForm from "../../utils/dynamicRenderFrom";
export default function CategoryActions(props) {
  let {history} = props;
  return (
    <div>
      <DynamicRenderForm history={history} config={Config.CategoryActionConfig} />
    </div>
  );
}
