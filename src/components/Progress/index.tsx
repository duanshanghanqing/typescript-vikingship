import React, { FC, CSSProperties } from 'react';
import { ThemeProps } from '../Icon';
import './index.scss';

export interface ProgressProps {
    // 进度
    percent: number;
    // 高度
    strokeHeight?: number;
    // 显示文字
    showText?: boolean;
    // 定义css
    styles?: CSSProperties;
    // 主题
    theme?: ThemeProps;
}

export const Progress: FC<ProgressProps> = (props) => {
    const {
        percent,
        strokeHeight,
        showText,
        styles,
        theme,
    } = props;
    return (
        <div className="viking-progress-bar" style={styles}>
            <div className="viking-progress-bar-outer" style={{ height: strokeHeight }}>
                <div
                    className={`viking-progress-bar-inner color-${theme}`}
                    style={{ width: `${percent}%` }}
                >
                    {showText && <span className="inner-text">{`${percent}%`}</span>}
                </div>
            </div>
        </div>
    );
}

Progress.defaultProps = {
    percent: 0,
    strokeHeight: 15,
    showText: true,
    theme: 'primary',
}

export default Progress;
