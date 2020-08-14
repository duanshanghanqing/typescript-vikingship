import React, { FC, useRef, ChangeEvent } from 'react';
import { Button } from '../index';
import axios from 'axios';



export interface UploadProps {
    //  input accept Attribute
    accept?: string;
    // 上传地址
    action: string;
    // 上传请求的 http method
    method?: string;
    // 支持上传文件夹
    directory?: boolean;
    //多文件上传
    multiple?: boolean;
    // 上传进度
    onProgress?: (percentage: number, file: File) => void;
    // 每上传一次，触发一下 ，返回当前上传成功或失败的文件信息，和全部文件信息
    onChang?: (info: any, error: any, fileDataList: any[]) => void;
    // 上传结束
    onEnd?: (fileDataList: any[]) => void;
}

const Upload: FC<UploadProps> = (props) => {
    const {
        action,
        method,
        directory,
        multiple,
        onProgress,
        onChang,
        onEnd,
    } = props;

    const handleFileChang = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (!files) {
            return;
        }

        const fileDataList = [];
 
        let index: number = 0;
        async function upload(file: File) {
            const formData = new FormData();
            formData.append('file', file);
            try {
                const { data } = await axios.post('https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    onUploadProgress: (e) => {
                        let percentage = Math.round((e.loaded * 100 / e.total) / e.total) || 0;
                        if (percentage < 100) {
                            onProgress && onProgress(percentage, file);
                        }
                    }
                });
                const info = data;
                fileDataList.push({ info });
                onChang && onChang(info, null, fileDataList);
            } catch (error) {
                fileDataList.push({ error });
                onChang && onChang(null, error, fileDataList);
            } finally {
                index++;
                if (index < files.length) {
                    upload(files[index]);
                }
                // 结束
                if (index === files.length) {
                    onEnd && onEnd(fileDataList);
                }
            }
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

    const buttonClick = () => {
        fileInput.current.click();
    }

    return (
        <>
            <Button onClick={buttonClick}>选择文件</Button>
            <input
                type="file"
                style={{ display: 'none' }}
                ref={fileInput}
                onChange={handleFileChang}
                accept={action}
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
