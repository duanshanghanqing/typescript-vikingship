import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// 添加显示组件信息
addDecorator(withInfo);
// 添加配置
addParameters({
    info: {
        inline: true,  // 直接显示信息，不需要点击图标
        header: false, // 不显示头部，比较好看
    },
});

// 定义内容居中的组件
const StoryWrapper = ({ children }) => (
    <div style={{ padding: '20px 40px', }}>
        {children}
    </div>
);
addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>);

