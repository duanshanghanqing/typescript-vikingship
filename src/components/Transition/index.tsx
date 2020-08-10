import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import './index.scss';

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';

type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName, // 动画名称
    wrapper? : boolean,
}

const Transition: FC<TransitionProps> = (props) => {
    const {
        children,
        classNames,
        animation,
        wrapper,
        ...restProps
    } = props;
    return (
        <CSSTransition 
            // 提供自定义的动画就用
            classNames={classNames ? classNames : animation}
            {...restProps}
        >
            { wrapper ? <div>{children}</div> : children }
        </CSSTransition>
    );
}

Transition.defaultProps = {
    unmountOnExit: true,
    appear: true,
}

export default Transition;
