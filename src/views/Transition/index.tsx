import React from 'react';
import { Button, Transition } from '../../components';

interface Iprops {
}

interface Istate {
    showLeft: boolean,
    showTop: boolean,
}

class Index extends React.Component<Iprops, Istate> {
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

export default Index;
