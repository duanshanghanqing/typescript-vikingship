import React from 'react';

import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import { Button } from '../src/components';
// 一级标题
export default {
  title: '按钮',
  // component: Button,
};

// 二级
export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;
Text.story = {
  name: '默认按钮',
};

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
