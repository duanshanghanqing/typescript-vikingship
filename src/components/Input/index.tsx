import React, { FC, ReactElement, InputHTMLAttributes } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type size = 'lg' | 'ml' | 'sm';

// Omit<属性,要忽略的属性>
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean,
    size?: size,
    icon?: IconProp,
    prepand?: string | ReactElement,
    append?: string | ReactElement,
}

export const Input: FC<InputProps> = (props) => {
    // 获取属性

    // 根据属性计算不同的 className

    // 根据不同的属性生成不同的节点
    return (
        <div>1</div>
    );
}

export default Input;