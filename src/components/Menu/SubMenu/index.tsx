import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from '../index';
import { IMenuItemProps } from '../MenuItem';
import { Icon } from '../../../components';
import { CSSTransition } from 'react-transition-group';
import './index.scss';

export interface ISubMenuProps {
    index?: string,
    title: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode; // 可以传多个内容
}

const SubMenu: React.FC<ISubMenuProps> = ({ index, title, className, style, children }) => {

    // 得到父组件传递的Context
    const itemContext = useContext(MenuContext);

    // 需求：只有纵向才默认展开
    const openSubMenus = itemContext.defaultOpenSubMenus as Array<string>; // 可能是 undefined,这里使用类型断言转换
    // 设置初始化默认展开状态，读取用户配置
    let isOpen = false;
    if (itemContext.mode === 'vertical' && openSubMenus.includes(index)) {
        isOpen = true;
    }
    const [menuOpen, setMenuOpen] = useState(isOpen);// 定义展开合并的状态

    const classes = classNames('menu-item submenu-item', {
        'is-active': itemContext.index === index,// 选中样式
        'is-opened': menuOpen, // 打开样式
        'is-vertical': itemContext.mode === 'vertical',
    }, className);


    // 校验传入的 children item 类型必须是一个 displayName === 'Item' 类型
    const renderChildren = (children) => {
        // 使用 React 提供的Children map 遍历
        const childrenComponent = React.Children.map(children, (child, i) => {
            // 类型断言
            const childElement = child as React.FunctionComponentElement<IMenuItemProps>;
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem') {
                // 自动给子组件添加 index 属性，使用React  React.cloneElement() 方法
                // 自动添加index
                return React.cloneElement(childElement, { index: `${index.toString()}-${i}` }); // 使用父组件的索引加子组件的索引
            } else {
                console.error('waring: Menu has a child whild which is not a MenuItem');
            }
        });

        // 切换下拉菜单显示隐藏
        const sumMenuClasses = classNames('viking-submenu', {
            'menu-opened': menuOpen
        });
        return (
            <CSSTransition 
                // 从无到有，是否打开
                in={menuOpen}
                // 延迟100毫秒执行
                timeout={100}
                // 自定义名称
                classNames="zoom-in-top"
                // 第一次执行也会运行动画过程
                appear={true}
            >
                <ul className={sumMenuClasses}>
                    {childrenComponent}
                </ul>
            </CSSTransition>
        );
    }

    // 点击title展开
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    }
    // 鼠标悬停显示和隐藏
    let timer: any;
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        if (timer) {
            clearTimeout(timer);
        }
        e.preventDefault();
        timer = setTimeout(() => {
            setMenuOpen(toggle);
        }, 100);
    }

    // 纵向使用点击事件， 横行使用鼠标悬停事件
    // 1.点击事件
    const clickEvent = itemContext.mode === 'vertical' ? {
        onClick: handleClick,
    } : {};
    // 2.悬停事件
    const hoveEvent = itemContext.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
        onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) },
    } : {};

    return (
        <li key={index} className={classes} style={style} {...hoveEvent}>
            <div className="submenu-title" {...clickEvent}>
                {title}
                <Icon icon="angle-down" size="1x" className="arrow-icon" />
            </div>
            {renderChildren(children)}
        </li>
    );
}

SubMenu.displayName = 'SubMenu';

export default SubMenu;
