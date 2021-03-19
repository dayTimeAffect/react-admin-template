/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/12/11
 */

import React from "react";
import styles from "./header.module.less"
import {Avatar} from "antd"
import {MenuFoldOutlined} from "@ant-design/icons"

interface HeaderCustomProps {
    collapsed: Boolean,
    setCollapsed: Function
}

const HeaderCustom: React.FC<HeaderCustomProps> = (props) => {
    return (
        <div className={styles.headerCustom_container}>
            <MenuFoldOutlined />
            <Avatar size={64} >U</Avatar>
        </div>
    )
}
export default HeaderCustom