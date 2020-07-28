import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'; // 全部图标
import './index.scss';

// library.add(faCheckSquare, faCoffee); // 把多个图标提前准备好
library.add(fas); // 全部图标

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dary';

export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps,
}

const Icon: React.FC<IconProps> = (props) => {
    const {
        className,
        theme,
        ...restProps
    } = props;
    const classes = classNames('viking-icon', {
        [`icon-${theme}`]: theme,
    }, className);
    return (
        <FontAwesomeIcon className={classes} {...restProps} />
    );
}
export default Icon;