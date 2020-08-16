import React, { FC } from 'react';
import { UploadFile } from '../index';
import { Icon, Progress } from '../../index'
import './index.scss';

export interface UploadListProps {
    // 文件列表
    fileList: UploadFile[];
    // 点击删除的事件会掉
    onRemove?: (fileListItem: UploadFile) => void;
}

export const UploadList: FC<UploadListProps> = (props) => {
    const {
        fileList,
        onRemove,
    } = props;

    return (
        <ul className="viking-upload-list">
            {
                fileList.map((item) => {
                    return (
                        <li key={item.uid} className="viking-upload-list-item ">
                            <span className={`file-name file-name-${item.status}`}>
                                <Icon icon="file-alt" theme="secondary" />
                                {item.name}
                            </span>
                            <span className="file-status">
                                {(item.status === 'uploading' || item.status === 'ready') && <Icon icon="spinner" spin={true} theme="primary" />}
                                {item.status === 'success' && <Icon icon="check-circle" theme="success" />}
                                {item.status === 'error' && <Icon icon="times-circle" theme="danger" />}
                            </span>
                            <span className="file-actions">
                                <Icon icon="times" onClick={() => { onRemove(item) }} />
                            </span>
                            {item.status === 'uploading' &&
                                <Progress
                                    percent={item.percent || 0}
                                />
                            }
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default UploadList;
