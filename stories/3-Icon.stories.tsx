import React from 'react';
import { action } from '@storybook/addon-actions';
import { Icon } from '../src/components';

export default {
    title: '图标',
    component: Icon,
};

export const IconWithSize = () => (
    <React.Fragment>
        <Icon icon="coffee" theme="primary" size="1x" onClick={action('clicked')} />
        <Icon icon="coffee" theme="primary" size="2x" onClick={action('clicked')} />
        <Icon icon="coffee" theme="primary" size="3x" onClick={action('clicked')} />
        <Icon icon="coffee" theme="primary" size="4x" onClick={action('clicked')} />
        <Icon icon="coffee" theme="primary" size="5x" onClick={action('clicked')} />
    </React.Fragment>
);
IconWithSize.story = {
    name: '不同大小图标',
};
