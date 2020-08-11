import React, { Component, createContext, FunctionComponentElement, Children, cloneElement, CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import MenuItem, { IMenuItemProps } from './MenuItem';
import SubMenu from './SubMenu';
import './index.scss';

// 定义类型
export type mode = 'horizontal' | 'vertical'; // 横向 | 纵向
export type SelectCallback = (selectedIndex: string) => void; // 抽象Callback 

// 定义 props 属性约束
export interface IMenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: mode;
    style?: CSSProperties;
    onSelect?: SelectCallback;
    // children?: React.ReactChild;
    children?: ReactNode; // 可以传多个内容
    defaultOpenSubMenus?: string[], // 默认展开
};

// 定义 state 属性约束
export interface IMenuState {
    currentActive: string; // 选中的样式
}

// 定义context约束。Context 要传递的哪些属性
export interface IMenuContext {
    index: string,
    onSelect?: SelectCallback,
    mode?: mode;
    defaultOpenSubMenus?: string[], // 默认展开，向下传递
};

// 定义父 MenuContext实例, 并设置初始默认值
export const MenuContext = createContext<IMenuContext>({
    index: '0',
    onSelect: () => {},
});

export class Menu extends Component<IMenuProps, IMenuState>{
    constructor(props) {
        super(props);
        const {
            defaultIndex,
        } = this.props;

        this.state = {
            currentActive: defaultIndex, // 默认选中的值
        };
    }

    static MenuItem = MenuItem;

    static SubMenu = SubMenu;

    static defaultProps = {
        defaultIndex: '0',
        mode: 'horizontal',
        defaultOpenSubMenus: [],
    }

    public handleClick = (currentActive: string) => {
        // console.log(currentActive);
        this.setState({ currentActive });
        if (typeof this.props.onSelect === 'function') {
            this.props.onSelect(currentActive);
        }
    }

    render() {

        const {
            className,
            mode,
            style,
            children,
            defaultOpenSubMenus
        } = this.props;

        const classes = classNames('viking-menu', {
            'menu-vertical': mode === 'vertical',
            'menu-horizontal': mode !== 'vertical',
        }, className);

        const { 
            currentActive, 
        } = this.state;
        
        // 定义使用 Context 传递的参数
        const itemContext: IMenuContext = {
            index: currentActive,
            onSelect: this.handleClick,
            mode,
            defaultOpenSubMenus,
        }

        // 校验传入的 children item 类型必须是一个 displayName === 'Item' 类型
        const renderChildren = (children) => {
            return Children.map(children, (child, index) => {
                // 类型断言
                const childElement = child as FunctionComponentElement<IMenuItemProps>;
                const { displayName } = childElement.type;
                // 子元素可能是 MenuItem， 也可能是 SubMenu
                if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                    // 自动给子组件添加 index 属性，使用React  React.cloneElement() 方法
                    // 自动添加index
                    return cloneElement(childElement, { index: index.toString() }); 
                } else {
                    console.error('waring: Menu has a child whild which is not a MenuItem');
                }
            });
        }

        return (
            <ul
                className={classes}
                style={style}
                data-testid="test-menu"
            >
                <MenuContext.Provider value={itemContext}>
                    { renderChildren(children) }
                </MenuContext.Provider>
            </ul>
        );
    }
}


export default Menu;