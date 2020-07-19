import React from 'react';
import { render } from '@testing-library/react'
import ConfigProvider from '../ConfigProvider';
import Button from '../ConfigProvider';
import { zh_CN } from '../../../locale';

test('Button test', () => {
    const wrapper = render(
        <ConfigProvider locale={zh_CN}>
            <Button>123</Button>
        </ConfigProvider>
    );
    
    const element = wrapper.queryByText('123');
    expect(element).toBeTruthy();
});
