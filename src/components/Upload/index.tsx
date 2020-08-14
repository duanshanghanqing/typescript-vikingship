import React, { FC, useRef, ChangeEvent } from 'react';
import { Button } from '../index';
import axios from 'axios';

export interface UploadProps {
    //  input accept Attribute
    accept?: string;
    // 上传地址
    action: string;
    // 上传请求的 http method
    method: string;
    // 支持上传文件夹
    directory: boolean;
    //多文件上传
    multiple: boolean;
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
        method,
        directory,
        multiple,
        onProgress,
        onSuccess,
        onError,
    } = props;

    const handleFileChang = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (!files) {
            return;
        }
        uploadFiles(files);
    }

    const uploadFiles = async (files: FileList) => {

        let index: number = 0;
        function upload(file: File) {
            const formData = new FormData();
            formData.append('file', file);
            axios.post('https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: () => {
                    
                }
            }).then((res) => {

            }).catch(() => {

            }).finally(() => {
                index++;
                if (index < files.length) {
                    upload(files[index]);
                }
                // 结束
                if (index === files.length) {

                }
            });
        }

        upload(files[index]);

    }

    // 获取input节点
    const fileInput = useRef<HTMLInputElement>(null);

    // 支持上传文件夹
    // https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLInputElement/webkitdirectory
    if (fileInput.current && directory) {
        fileInput.current.setAttribute('webkitdirectory', '');
        fileInput.current.setAttribute('directory', '');
    }

    return (
        <>
            <Button onClick={fileInput.current.click}>选择文件</Button>
            <input
                type="file"
                style={{ display: 'none' }}
                ref={fileInput}
                onChange={handleFileChang}
                // webkitdirectory={true}
                multiple={multiple}
            />
        </>
    );
}

Upload.defaultProps = {
    accept: '',
    method: 'post',
    directory: false,
    multiple: false,
}

export default Upload;
