// import React from 'react';
// import { withInfo } from '@storybook/addon-info';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

// export default {
//   title: 'Button',
//   component: Button,
//   decorators: [withInfo],
// };

// export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

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

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../src/components';

export default {
  title: '按钮',
  component: Button,
};

export const DefaultButton = () => <Button onClick={action('clicked')}>Hello Button</Button>;
DefaultButton.story = {
  // name: 'Button', // 修改成这样可显示改组件上的注释
  name: '默认按钮',
};

export const ButtonWithSize = () => (
  <>
    <Button onClick={action('clicked')} size="lg">lg Button</Button>
    <Button onClick={action('clicked')} size="ml">ml Button</Button>
    <Button onClick={action('clicked')} size="sm">sm Button</Button>
  </>
);
ButtonWithSize.story = {
  name: '不同大小按钮',
};

export const ButtonWithType = () => (
  <>
    <Button onClick={action('clicked')} btnType="primary">primary Button</Button>
    <Button onClick={action('clicked')} btnType="default">default Button</Button>
    <Button onClick={action('clicked')} btnType="danger">danger Button</Button>
    <Button onClick={action('clicked')} btnType="link" href="#">link Button</Button>
  </>
);
ButtonWithType.story = {
  name: '不同类型按钮',
};