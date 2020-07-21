import React from 'react';
import { render, RenderResult } from '@testing-library/react'
import Menu, { IMenuProps } from './index';

const { Item } = Menu;

// 定义组件1类型参数
const tetsProps: IMenuProps = {
    mode: 'horizontal',
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
}

// 定义组件2类型参数
const testVerProps: IMenuProps = {
    defaultIndex: 0,
    mode: 'vertical',
}

const generateMenu = (props: IMenuProps) => {
    return (
        <Menu defaultIndex={props.defaultIndex} mode={props.mode} onSelect={props.onSelect}>
            <Item index={0}>active</Item>
            <Item index={1} disabled={true}>disabled</Item>
            <Item index={2}>xyz</Item>
        </Menu>
    );
}

let wrapper: RenderResult, 
    wrapper2: RenderResult, 
    menuElement: HTMLElement, 
    activeElement: HTMLElement, 
    disabledElement: HTMLElement;

describe('test Menu and MenuItem component in default(horizontal) mode', () => {
    // 在每个keys之前都会执行
    beforeEach(() => {
        wrapper = render(generateMenu(tetsProps));
        menuElement = wrapper.getByTestId('test-menu');  // 获取 组件
        // wrapper.container.getAttribute('data-testid'); // 原生dom元素 
        activeElement = wrapper.getByText('active'); // 获取选中的item
        disabledElement = wrapper.getByText('disabled'); // 获取禁用的item

        wrapper2 = render(generateMenu(testVerProps));
    });

    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeTruthy();
        expect(menuElement.getElementsByTagName('li').length).toEqual(3);
        // expect(menuElement).toBeInTheDocument();
        // expect(menuElement).toHaveClass('viking-menu');
    });

    it('绑定事件', () => {
        const thirdItem = wrapper.getByText('xyz');
        console.log(thirdItem);
        
    });
});
