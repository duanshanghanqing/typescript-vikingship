import React from 'react';
import { render } from '@testing-library/react'
import Test from './index';


test('our first react test case', () => {
    const wrapper = render(<Test />);
    const element = wrapper.queryByText('Test');
    expect(element).toBeTruthy();
});
