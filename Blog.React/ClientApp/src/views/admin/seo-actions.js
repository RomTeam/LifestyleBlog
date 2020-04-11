import React, { Fragment } from 'react'
import DynamicRenderForm from '../../utils/dynamicRenderFrom'
import * as SeoConfig from '../../constants/seoConfig'

export default function SeoActions(props) {
    let {history} = props;
    return (
        <Fragment>
            <DynamicRenderForm history={history} config={SeoConfig.SeoActionConfig} />
        </Fragment>
    )
}
