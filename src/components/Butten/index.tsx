import React, { useContext, FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../ConfigProvider';
// import './index.less';
import './index.scss';

// 按钮大小
// enum ButtonSize {
//     Large = 'lg',
//     Middle = 'ml',
//     Small = 'sm',
// };
export type ButtonSize = 'lg' | 'ml' | 'sm';

// 按钮类型
// enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link',
// };
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

// 定义组件属性
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: string;
    btnType?: string;
    children: React.ReactChild;
    href?: string;
};

// 扩展按钮属性，如 onClick...
// & ： typeScript 中联合类型，表示两种类型都要。 | 或：两个取其中一个
// Partial<> : typeScript 中提供，把属性变成可选的
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

// React.FunctionComponent
const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        disabled,
        size,
        btnType,
        children,
        href,
        ...restProps
    } = props;

    const classes = classNames('vik-btn', {
        [`vik-btn-${btnType}`]: !!btnType,
        [`vik-btn-${size}`]: !!size,
        'vik-disabled': (btnType === 'link') && disabled
    }, className);

    if (btnType === 'link' && href) {
        return (
            <a 
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        );
    }

    const config = useContext(ConfigContext);
    // console.log(config.locale.Butten);

    return (
        <button 
            className={classes}
            disabled={disabled}
            {...restProps}
        >
            {/* {children}-{config.locale.Butten[btnType]} */}
            {children}
        </button>
    );
};

// 默认属性
Button.defaultProps = {
    disabled: false,
    btnType: 'Default',
    size: 'large',
};

export default Button;
