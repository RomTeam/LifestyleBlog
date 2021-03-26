import React from "react";
// @material-ui/core components
import * as Config from "../../constants/newsConfig";
import DynamicRenderForm from "../../utils/dynamicRenderFrom";

export default function UserActions(props) {
  let { history } = props;
  return (
    <div>
      <DynamicRenderForm
        history={history}
        config={Config.NewsActionConfig}
        hasSeo={true}
      />
    </div>
  );
}
