
## node-sass 安装不上解决办法

    安装 nrm

        npm install -g nrm
    
    切换到淘宝镜像安装

## 安装 jestjs 通用测试框架
    js:
        npm install jest
    ts:
        npm install jest @types/jest firebase-functions-test ts-jest -D

## 安装 react 测试框架

    npm i @testing-library/react @testing-library/react-hooks @testing-library/jest-dom -D

    @testing-library/react 测试React Component的库
    @testing-library/react-hooks 测试自己写的的React Hooks的库
    @testing-library/jest-dom 提供更多利于dom测试的断言

    报错
        http://www.voidcn.com/article/p-mcvcsfwy-bvu.html
        reactjs – Jest找不到模块FileName.css(映射为identity-obj-proxy)

        安装
            npm install --save-dev identity-obj-proxy
            
    并配置 jest.config.js 文件        

## 安装字体图标
    http://www.fontawesome.com.cn/faicons/
    https://github.com/FortAwesome/react-fontawesome

    npm i --save @fortawesome/fontawesome-svg-core \
             @fortawesome/free-solid-svg-icons \
             @fortawesome/react-fontawesome
    
## 安装动画库
    https://reactjs.org/docs/animation.html
    npm i react-transition-group @types/react-transition-group -S

# 安装  storybook,用于查看我们写好的组件
    https://storybook.js.org/docs/guides/guide-react/

    npx -p @storybook/cli sb init

    支持ts,tsx配置
        https://storybook.js.org/docs/configurations/typescript-config/
        .storybook/main.js
            module.exports = {
                stories: ['../stories/**/*.stories.tsx', '../src/**/*.scss'],
                addons: ['@storybook/addon-actions', '@storybook/addon-links'],
                webpackFinal: async config => {
                    // do mutation to the config
                    config.module.rules.push({
                        test: /\.(ts|tsx)$/,
                        use: [
                            {
                                loader: require.resolve('ts-loader'),
                            },
                        ],
                    });
                    config.module.rules.push({
                        test: /\.scss$/,
                        use: ['style-loader', 'css-loader', 'sass-loader'],
                    });
                    config.resolve.extensions.push('.ts', '.tsx');
                    return config;
                },
            };

    配置全局的修饰器    
        .storybook/preview.js
            import { addDecorator } from '@storybook/react';
            import React from 'react';

            定义内容居中的组件
            const styles = {
                textAlign: 'center',
            };
            const Center = ({ children }) => <div style={styles}>{children}</div>;

            addDecorator(storyFn => <Center>{storyFn()}</Center>);

    配置全局的修饰器
        stories/1-Button.stories.tsx
            import Button from './button';
            import Center from './center';

            export default {
            title: 'Button',
                decorators: [storyFn => <Center>{storyFn()}</Center>],
            };

            export const defaultView = () => (
                <Button>Hello Button</Button>
            );

## 安装  @storybook/addon-info 插件,用于展示组件的使用文档源码

    https://github.com/storybookjs/storybook/tree/master/addons/info
    https://developer.aliyun.com/mirror/npm/package/@types/storybook__addon-info
    npm i -D @storybook/addon-info @types/storybook__addon-info -D

    stories/Button.stories.tsx
        import React from 'react';
        import { withInfo } from '@storybook/addon-info';
        import { action } from '@storybook/addon-actions';
        import { Button } from '@storybook/react/demo';

        export default {
            title: 'Button',
            component: Button,
            decorators: [withInfo],
        };

        export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

        export const Emoji = () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
            😀 😎 👍 💯
            </span>
        </Button>
        );

        Emoji.story = {
            name: 'with emoji',
        };

## 添加自动生成文档 
    
    https://github.com/reactjs/react-docgen

    支持typescript
    https://github.com/strothj/react-docgen-typescript-loader
    
        npm install --save-dev react-docgen-typescript-loader

        要想使用这个库，组件必须要使用这样的导出，才能分析的出来
        import React, { useContext, FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

        组件也要这样导出
        export const Button: FC<ButtonProps> = (props) => {

## 打包

    ts files.tsx -> es6 modules.jsx -> 入口文件引用余姚的文件 index.tsx -> module bundler webpack.rollup -> 浏览器执行的js