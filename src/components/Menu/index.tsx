import React from 'react';
import classNames from 'classnames';
import Item from './Item';

// 定义类型
type MenuMode = 'horizontal' | 'vertical'; // 横向 | 纵向
type SelectCallback = (selectedIndex: number) => void; // 抽象Callback 

// 定义 props 属性约束
interface IMenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    // children?: React.ReactChild;
    children?: React.ReactNode; // 可以传多个内容
};

// 定义 status 属性约束
interface IMenuStatus {
    currentActive: number;
}

// 定义context约束。Context 要传递的哪些属性
interface IMenuContext {
    index: number,
    onSelect?: SelectCallback;
};

// 定义父 MenuContext实例, 并设置初始默认值
export const MenuContext = React.createContext<IMenuContext>({
    index: 0,
    onSelect: () => {},
});

class Menu extends React.Component<IMenuProps, IMenuStatus>{
    constructor(props) {
        super(props);
        const {
            defaultIndex,
        } = this.props;

        this.state = {
            currentActive: defaultIndex, // 默认选中的值
        };
    }

    static Item = Item;

    static defaultProps = {
        defaultIndex: 0,
        mode: 'horizontal',
    }

    componentDidMount() {

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

        const classes = classNames('vik-menu', {
            'vik-menu-horizontal': mode === 'horizontal',
            'vik-menu-vertical': mode === 'vertical',
        }, className);

        const { 
            currentActive, 
        } = this.state;
        
        // 定义使用 Context 传递的参数
        const itemContext: IMenuContext = {
            index: currentActive,
            onSelect: this.handleClick,
        }

        return (
            <ul
                className={classes}
                style={style}
            >
                <MenuContext.Provider value={itemContext}>
                    {children}
                </MenuContext.Provider>
            </ul>
        );
    }
}


export default Menu;