/**
 * @Description:
 * @author dayTimeAffect
 * @date 2021/3/18
 */

import React from "react";
import {Tooltip} from "antd"
import { TooltipProps } from 'antd/lib/tooltip';

interface OpProps {
    onClick?: () => void,
}
type ToolTipOpProps = OpProps & TooltipProps


const ToolTipOp: React.FC<ToolTipOpProps> = (prop) => {
    const {
        onClick,
        children,
        ...rest
    } = prop
    return (
        <span onClick={onClick}>
            <Tooltip {...rest}>{ children }</Tooltip>
        </span>
    )
}
export default ToolTipOp