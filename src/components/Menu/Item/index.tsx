import React, { FC } from 'react';
import classNames from 'classnames';

export interface ItemProps {
    index?: number,
    disabled?: boolean,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactChild;
}

const Item: FC<ItemProps> = (props) => {

    const {
        index,
        disabled,
        className,
        style,
        children
    } = props;

    const classes = classNames('vik-menuItem', {
        'is-disabled': disabled,
    }, className);

    return (
        <li 
            className={classes} 
            style={style}
        >
            {children}
        </li>
    );
}

export default Item;
