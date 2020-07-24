import React from 'react';
import { render, RenderResult, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // https://github.com/testing-library/jest-dom
import Menu, { IMenuProps } from './index';

const { MenuItem, SubMenu } = Menu;

// 定义组件1类型参数
const tetsProps: IMenuProps = {
    mode: 'horizontal',
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: 'test'
}

// 定义组件2类型参数
const testVerProps: IMenuProps = {
    mode: 'vertical',
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: 'test'
}

const generateMenu = (props: IMenuProps) => {
    return (
        <Menu defaultIndex={props.defaultIndex} mode={props.mode} onSelect={props.onSelect}>
            <MenuItem>active</MenuItem>
            <MenuItem disabled={true}>disabled</MenuItem>
            <MenuItem>xyz</MenuItem>
            <SubMenu title="download">
                <MenuItem>download1</MenuItem>
                <MenuItem>download2</MenuItem>
            </SubMenu>
        </Menu>
    );
}

// 给测试用例添加css
const createStyleFile = () => {
    const cssFile: string = `
        .viking-submenu {
            display: none;
        }
        .viking-submenu.menu-opened {
            display: block;
        }
    `;
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = cssFile;
    return style;
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
        wrapper.container.append(createStyleFile());
        menuElement = wrapper.getByTestId('test-menu');  // 获取 组件
        // wrapper.container.getAttribute('data-testid'); // 原生dom元素 
        activeElement = wrapper.getByText('active'); // 获取选中的item
        disabledElement = wrapper.getByText('disabled'); // 获取禁用的item
    });

    // 测试属性
    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('viking-menu');
        // expect(menuElement.getElementsByTagName('li').length).toEqual(3);
        expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4); // :scope css提供的选中器，表示在当前节点下
        expect(activeElement).toHaveClass('menu-item is-active');
        expect(disabledElement).toHaveClass('menu-item is-disabled');
    });

    // 测试行为
    it('should render vertical mode when mode is set to vertical', () => {
        const thirdItem = wrapper.queryByText('xyz');
        fireEvent.click(thirdItem);// 触发点击事件
        expect(thirdItem).toHaveClass('is-active');// 添加class
        expect(activeElement).not.toHaveClass('is-active');// 判断class是否存在
        expect(tetsProps.onSelect).toHaveBeenLastCalledWith('2');// 调用 onSelect ，传入参数 2

        fireEvent.click(disabledElement); // 点击被禁用的item
        expect(disabledElement).not.toHaveClass('is-active');// 没有添加is-active
        expect(tetsProps.onSelect).not.toHaveBeenLastCalledWith('1');// onSelect ，没有被触发
    });

    // 测试纵向
    it('should render vertical mode when mode is set to vertical', () => {
        cleanup();// 清空之前渲染的dom节点
        wrapper2 = render(generateMenu(testVerProps));
        const menuElement = wrapper2.getByTestId('test-menu'); // 获取改原始
        expect(menuElement).toHaveClass('viking-menu');// 判断viking-menu是否存在
    });

    // 测试鼠标移入移出点击等事件
    it('should show dropdown items when hover on subMenu', async () => {
        expect(wrapper.queryByText('download1')).not.toBeVisible(); // 判断 下拉菜单是否不可见，我们上面加了css样式，设置了不可见
        const downloadElement = wrapper.getByText('download'); // title 节点
        // 触发鼠标移入事件
        fireEvent.mouseEnter(downloadElement); 
        // expect(wrapper.queryByText('download1')).toBeVisible(); // 让其显示， 这里报错，因为组件代码里我们设置延迟执行。所有使用 async 语句
        await waitFor(() => {
            expect(wrapper.queryByText('download1')).toBeVisible(); // 显示出来
        });
        // 显示出来后，点击下拉菜单第一个item
        fireEvent.click(wrapper.getByText('download1')); // 点击这个item， 触发 onSelect 事件
        expect(tetsProps.onSelect).toHaveBeenCalledWith('3-0'); // 返回参数 是不是  3-0 
        // 鼠标离开
        fireEvent.mouseLeave(downloadElement); 
        await waitFor(() => {
            expect(wrapper.queryByText('download1')).not.toBeVisible(); // 消失
        });
    });
});
