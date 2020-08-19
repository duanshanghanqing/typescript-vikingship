import React from 'react';

interface IMyTestState {
    isShow: boolean;
}

class MyTest extends React.Component<{}, IMyTestState>{
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };
    }

    switch = () => {
        const { isShow } = this.state;
        this.setState({ isShow: !isShow });
    }

    render() {
        const { isShow } = this.state;
        return (
            <React.Fragment>
                <button onClick={this.switch}>{ isShow ? '关' : '开' }</button>
                {
                    isShow ? <div>我显示了</div> : ''
                }
            </React.Fragment>
        );
    }
}

export default MyTest;