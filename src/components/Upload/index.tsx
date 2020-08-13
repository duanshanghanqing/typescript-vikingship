import React, { FC, useRef, ChangeEvent } from 'react';
import { Button } from '../index';

export interface UploadProps {
    // 上传地址
    action: string;
    // 上传进度
    onProgress?: (percentage: number, file: File) => void;
    // 上传成功
    onSuccess?: (data: any, file: File) => void;
    // 上传错误
    onError?: (err: any, file: File) => void;
}

const Upload: FC<UploadProps> = (props) => {
    const {
        action,
        onProgress,
        onSuccess,
        onError,
    } = props;

    const handleFileChang = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files) {
            
        }
    }

    // 获取input节点
    const fileInput = useRef<HTMLInputElement>(null);

    return (
        <>
           <Button onClick={fileInput.current.click}>选择文件</Button> 
           <input 
                type="file"
                style={{ display: 'none' }}
                ref={fileInput}
                onChange={handleFileChang}
           />
        </>
    );
}

export default Upload;
