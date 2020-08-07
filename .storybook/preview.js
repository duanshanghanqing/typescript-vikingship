import React from 'react';
import { addDecorator } from '@storybook/react';

// 添加全局装饰
// https://storybook.js.org/docs/addons/introduction/

const styles = {
    textAlign: 'center',
};
const Center = ({ children }) => <div style={styles}>{children}</div>;

// 创建居中指令，并添加到全局指令中
addDecorator(storyFn => <Center>{storyFn()}</Center>);
