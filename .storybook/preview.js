import { addDecorator } from '@storybook/react';
import React from 'react';

// 定义内容居中的组件
const styles = {
    textAlign: 'center',
};
const Center = ({ children }) => <div style={styles}>{children}</div>;

addDecorator(storyFn => <Center>{storyFn()}</Center>);
