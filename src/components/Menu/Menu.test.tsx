import React from 'react';
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'; // https://github.com/testing-library/jest-dom
import Menu, { IMenuProps } from './index';

const { MenuItem } = Menu;

// 定义组件1类型参数
const tetsProps: IMenuProps = {
    mode: 'horizontal',
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
}

// 定义组件2类型参数
const testVerProps: IMenuProps = {
    mode: 'vertical',
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
}

const generateMenu = (props: IMenuProps) => {
    return (
        <Menu defaultIndex={props.defaultIndex} mode={props.mode} onSelect={props.onSelect}>
            <MenuItem>active</MenuItem>
            <MenuItem disabled={true}>disabled</MenuItem>
            <MenuItem>xyz</MenuItem>
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
    });

    // 测试属性
    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('viking-menu');
        expect(menuElement.getElementsByTagName('li').length).toEqual(3);
        expect(activeElement).toHaveClass('menu-item is-active');
        expect(disabledElement).toHaveClass('menu-item is-disabled');
    });

    // 测试行为
    it('should render vertical mode when mode is set to vertical', () => {
        const thirdItem = wrapper.queryByText('xyz');
        fireEvent.click(thirdItem);// 触发点击事件
        expect(thirdItem).toHaveClass('is-active');// 添加class
        expect(activeElement).not.toHaveClass('is-active');// 判断class是否存在
        expect(tetsProps.onSelect).toHaveBeenLastCalledWith(2);// 调用 onSelect ，传入参数 2

        fireEvent.click(disabledElement); // 点击被禁用的item
        expect(disabledElement).not.toHaveClass('is-active');// 没有添加is-active
        expect(tetsProps.onSelect).not.toHaveBeenLastCalledWith(1);// onSelect ，没有被触发
    });

    it('should render vertical mode when mode is set to vertical', () => {
        cleanup();// 清空之前渲染的dom节点
        wrapper2 = render(generateMenu(testVerProps));
        const menuElement = wrapper2.getByTestId('test-menu'); // 获取改原始
        expect(menuElement).toHaveClass('viking-menu');// 判断viking-menu是否存在
    });
});
