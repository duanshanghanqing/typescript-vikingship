import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../ConfigProvider';
import './index.less';

// 按钮大小
export enum ButtonSize {
    Large = 'lg',
    Middle = 'ml',
    Small = 'sm',
};

// 按钮类型
export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
};

// 定义组件属性
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactChild;
    href?: string;
};

// React.FunctionComponent
const Button: React.FC<BaseButtonProps> = (props) => {
    const {
        className,
        disabled,
        size,
        btnType,
        children,
        href,
    } = props;

    const classes = classNames('vik-btn', {
        [`vik-btn-${btnType}`]: !!btnType,
        [`vik-btn-${size}`]: !!size,
        'vik-disabled': (btnType === ButtonType.Link) && disabled
    }, className);

    if (btnType === ButtonType.Link && href) {
        return (
            <a 
                className={classes}
                href={href}
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
        >
            {children}-{config.locale.Butten[btnType]}
        </button>
    );
};

// 默认属性
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default,
    size: ButtonSize.Large,

};

export default Button;
