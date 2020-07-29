import React from 'react';
import { Butten, Transition } from '../../components';

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
                    <Butten onClick={() => { this.setState({ showLeft: !showLeft }) }}>切换动画-zoom-in-left</Butten>
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
                    <Butten onClick={() => { this.setState({ showTop: !showTop }) }}>切换动画-zoom-in-top</Butten>
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
