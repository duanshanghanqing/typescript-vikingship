// import React from 'react';
// import {render, fireEvent, screen} from '@testing-library/react'
// import Button from './index';

function sum(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
