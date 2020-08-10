import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Transition, Button } from '../src/components';

export default {
    title: '动画',
    component: Transition,
};


interface Iprops {
}

interface Istate {
    showLeft: boolean,
    showTop: boolean,
}

class IndexTransition extends React.Component<Iprops, Istate> {
    constructor(props) {
        super(props);
        this.state = {
            showLeft: false,
            showTop: false,
        };
    }

    render() {
        const { showLeft, showTop } = this.state;
        return (
            <div className="index">
                <div>
                    <Button onClick={() => { this.setState({ showLeft: !showLeft }) }}>切换动画-zoom-in-left</Button>
                    <Transition
                        in={showLeft}
                        timeout={300}
                        animation="zoom-in-left"
                        wrapper={true}
                    >
                        <>
                            <h1>java</h1>
                            <h1>javascript</h1>
                            <h1>go</h1>
                            <h1>php</h1>
                            <h1>node</h1>
                        </>
                    </Transition>
                </div>
                <div>
                    <Button onClick={() => { this.setState({ showTop: !showTop }) }}>切换动画-zoom-in-top</Button>
                    <Transition
                        in={showTop}
                        timeout={300}
                        animation="zoom-in-top"
                        wrapper={true}
                    >
                        <>
                            <h1>java</h1>
                            <h1>javascript</h1>
                            <h1>go</h1>
                            <h1>php</h1>
                            <h1>node</h1>
                        </>
                    </Transition>
                </div>
            </div>
        );
    }
}

export const DefaultTransition = () => {
    const [showLeft, setShowLeft] = useState(false);
    const [showTop, setShowTop] = useState(false);

    return (
        <>
            <Button onClick={() => { setShowLeft(!showLeft); }}>切换动画-zoom-in-left</Button>
            <Transition
                in={showLeft}
                timeout={300}
                animation="zoom-in-left"
                wrapper={true}
            >
                <h1>java</h1>
                <h1>javascript</h1>
                <h1>go</h1>
                <h1>php</h1>
                <h1>node</h1>
            </Transition>

            <br />

            <Button onClick={() => { setShowTop(!showTop); }}>切换动画-zoom-in-top</Button>
            <Transition
                in={showTop}
                timeout={300}
                animation="zoom-in-top"
                wrapper={true}
            >
                <h1>java</h1>
                <h1>javascript</h1>
                <h1>go</h1>
                <h1>php</h1>
                <h1>node</h1>
            </Transition>
        </>
    );
};
DefaultTransition.story = {
    name: '切换动画',
};