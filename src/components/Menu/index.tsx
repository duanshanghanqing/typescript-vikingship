import React, { createContext } from 'react';
import classNames from 'classnames';
import Item from './Item';

// 定义类型
type MenuMode = 'horizontal' | 'vertical'; // 横向 | 纵向
type SelectCallback = (selectedIndex: number) => void; // 抽象Callback

// 定义属性约束
interface IMenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    // children?: React.ReactChild;
    children?: React.ReactNode; // 可以传多个内容
};

interface IMenuContext {
    index: number,
    onSelect?: SelectCallback;
};


// 定义实例
const MenuContext = createContext<IMenuContext>({
    index: 0,
});




class Menu extends React.Component<IMenuProps>{
    constructor(props) {
        super(props);
        const {
            defaultIndex,
        } = this.props;

        this.state = {
            currentActive: defaultIndex || 0, // 默认选中的值
        };
    }

    static Item = Item;

    static defaultProps = {
        defaultIndex: 0,
        mode: 'horizontal',
    }

    componentDidMount() {

    }

    render() {

        const {
            defaultIndex,
            className,
            mode,
            style,
            children,
        } = this.props;

        const classes = classNames('vik-menu', {
            'vik-menu-horizontal': mode === 'horizontal',
            'vik-menu-vertical': mode === 'vertical',
        }, className);

        return (
            <ul
                className={classes}
                style={style}
            >
                {children}
            </ul>
        );
    }
}


export default Menu;