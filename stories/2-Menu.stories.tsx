import React from 'react';
import { action } from '@storybook/addon-actions';
import { Menu } from '../src/components';

const { MenuItem, SubMenu } = Menu;

export default {
    title: '菜单',
    component: Menu,
};

export const HorizontalMenu = () => (
    <Menu defaultIndex='0' onSelect={(index) => { action(index); }} defaultOpenSubMenus={['3']}>
        <MenuItem>active</MenuItem>
        <MenuItem disabled={true}>disabled</MenuItem>
        <MenuItem>xyz</MenuItem>
        <SubMenu title="download">
            <MenuItem>download1</MenuItem>
            <MenuItem>download2</MenuItem>
        </SubMenu>
    </Menu>
);
HorizontalMenu.story = {
    name: '横向菜单',
};

export const VerticalMenu = () => (
    <Menu defaultIndex='0' onSelect={(index) => { console.log(index); }} defaultOpenSubMenus={['3']} mode="vertical">
        <MenuItem>active</MenuItem>
        <MenuItem disabled={true}>disabled</MenuItem>
        <MenuItem>xyz</MenuItem>
        <SubMenu title="download">
            <MenuItem>download1</MenuItem>
            <MenuItem>download2</MenuItem>
        </SubMenu>
    </Menu>
);
VerticalMenu.story = {
    name: '纵向菜单',
};
