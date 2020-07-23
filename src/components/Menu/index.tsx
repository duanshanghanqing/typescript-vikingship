import React from 'react';
import classNames from 'classnames';
import MenuItem, { IMenuItemProps } from './MenuItem';
import SubMenu from './SubMenu';
import './index.scss';

// 定义类型
type MenuMode = 'horizontal' | 'vertical'; // 横向 | 纵向
type SelectCallback = (selectedIndex: number) => void; // 抽象Callback 

// 定义 props 属性约束
export interface IMenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    // children?: React.ReactChild;
    children?: React.ReactNode; // 可以传多个内容
};

// 定义 state 属性约束
export interface IMenuState {
    currentActive: number; // 选中的样式
}

// 定义context约束。Context 要传递的哪些属性
export interface IMenuContext {
    index: number,
    onSelect?: SelectCallback;
};

// 定义父 MenuContext实例, 并设置初始默认值
export const MenuContext = React.createContext<IMenuContext>({
    index: 0,
    onSelect: () => {},
});

class Menu extends React.Component<IMenuProps, IMenuState>{
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
        defaultIndex: 0,
        mode: 'horizontal',
    }

    public handleClick = (currentActive: number) => {
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
        }

        // 校验传入的 children item 类型必须是一个 displayName === 'Item' 类型
        const renderChildren = (children) => {
            return React.Children.map(children, (child, index) => {
                // 类型断言
                const childElement = child as React.FunctionComponentElement<IMenuItemProps>;
                const { displayName } = childElement.type;
                if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                    // 自动给子组件添加 index 属性，使用React  React.cloneElement() 方法
                    // 自动添加index
                    return React.cloneElement(childElement, { index }); 
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