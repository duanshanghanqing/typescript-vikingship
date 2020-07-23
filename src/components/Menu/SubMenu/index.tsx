import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from '../index';
import { IMenuItemProps } from '../MenuItem';

export interface ISubMenuProps {
    index?: number,
    title: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode; // 可以传多个内容
}

const SubMenu: React.FC<ISubMenuProps> = ({ index, title, className, style, children }) => {

    // 得到父组件传递的Context
    const itemContext = useContext(MenuContext);

    const classes = classNames('menu-item submenu-item', {
        'is-active': itemContext.index === index,
    }, className);


    // 校验传入的 children item 类型必须是一个 displayName === 'Item' 类型
    const renderChildren = (children) => {
        // 使用 React 提供的Children map 遍历
        const childrenComponent = React.Children.map(children, (child, index) => {
            // 类型断言
            const childElement = child as React.FunctionComponentElement<IMenuItemProps>;
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem') {
                // 自动给子组件添加 index 属性，使用React  React.cloneElement() 方法
                // 自动添加index
                return React.cloneElement(childElement, { index }); 
            } else {
                console.error('waring: Menu has a child whild which is not a MenuItem');
            }
        });
        return (
            <ul className="viking-submenu">
                { childrenComponent }
            </ul>
        );
    }
    return (
        <li key={index} className={classes} style={style}>
            <div className="submenu-title">{title}</div>
            { renderChildren(children) }
        </li>
    );
}

SubMenu.displayName = 'SubMenu';

export default SubMenu;
