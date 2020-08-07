import React from 'react';

import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

// 二级页面
// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );

// Emoji.story = {
//   name: 'with emoji',
// };
import { Button } from '../src/components';
import { withInfo } from '@storybook/addon-info';

// 局部让按钮居中 https://storybook.js.org/docs/addons/introduction/
// const styles: React.CSSProperties = {
//   textAlign: 'center',
// };
// const Center = ({ children }) => <div style={styles}>{children}</div>;

// 一级标题
export default {
  title: '按钮',
  component: Button,
  // decorators: [storyFn => <Center>{storyFn()}</Center>], // 添加局部装饰
  decorators: [withInfo],
};

// 二级标题
export const defaultButton = () => <Button onClick={action('clicked')}>Hello Button</Button>;
defaultButton.story = {
  name: '默认按钮',
  parameters: {
    info: {},
  },
};

export const buttonWithSize = () => (
  <>
    <Button size="lg">lg size Button</Button>
    <Button size="ml">ml size Button</Button>
    <Button size="sm">sm size Button</Button>
  </>
);
buttonWithSize.story = {
  name: '不同尺寸的按钮',
};

export const buttonWithType = () => (
  <>
    <Button btnType="primary">primary Button</Button>
    <Button>default Button</Button>
    <Button btnType="danger">danger Button</Button>
    <Button btnType="link">link Button</Button>
  </>
);
buttonWithType.story = {
  name: '不同类型的按钮',
};


