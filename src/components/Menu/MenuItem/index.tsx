import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from '../index';

// 定义属性约束
export interface IMenuItemProps {
    index?: number,
    disabled?: boolean,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactChild;
}

const MenuItem: FC<IMenuItemProps> = (props) => {

    const {
        index,
        disabled,
        className,
        style,
        children
    } = props;
    
    // 得到父组件传递的Context
    const itemContext = useContext(MenuContext);

    const classes = classNames('menu-item', {
        'is-disabled': disabled,
        'is-active': itemContext.index === index,
    }, className);

    const handleClick = () => {
        // 并且没有禁用
        if (typeof itemContext.onSelect === 'function' && !disabled) {
            // 传递给父组件
            itemContext.onSelect(index);
        }
    }

    return (
        <li 
            className={classes} 
            style={style}
            onClick={handleClick}
        >
            {children}
        </li>
    );
}

MenuItem.displayName = 'MenuItem';

export default MenuItem;
