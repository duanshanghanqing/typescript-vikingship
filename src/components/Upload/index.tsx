import React, { FC, useRef, ChangeEvent, ReactNode, useState } from 'react';
import axios from 'axios';

// 文件上传状态
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';

// 文件返回数据的几个基本参数
export interface UploadFile {
    // 上传文件的唯一id
    uid: string;
    // 文件大小
    size: number;
    // 文件名称
    name: string;
    // 文件状态
    status?: UploadFileStatus;
    // 上传进度
    percent?: number;
    // 源文件
    raw?: File;
    // 上传成功后把文件的响应信息存在里面
    response?: any;
    // 失败了
    error?: any;
}

export interface UploadProps {
    //  input accept Attribute
    accept?: string;
    // 上传地址
    action: string;
    // 上传请求的 http method
    method?: string;
    // data 请求扩展的参数
    data?: object;
    // 支持上传文件夹
    directory?: boolean;
    //多文件上传
    multiple?: boolean;
    // 可以传多个内容
    children?: ReactNode;
    // 上传进度
    onProgress?: (percentage: number, file: UploadFile) => void;
    // 每上传一次，触发一下 ，返回当前上传成功或失败的文件信息，和全部文件信息
    onChang?: (info: any, error: any, fileList: UploadFile[]) => void;
    // 上传前的钩子
    beforeUpload?: (file: File) => boolean | Promise<File>;
    // 默认要展示的文件列表
    defaultFileList?: UploadFile[];
    // 点击删除后的回调
    onRemove?: (fileListItem: UploadFile) => boolean | Promise<File>;
}

const Upload: FC<UploadProps> = (props) => {
    const {
        action,
        method,
        data,
        directory,
        multiple,
        children,
        onProgress,
        onChang,
        beforeUpload,
        defaultFileList,
        onRemove,
    } = props;

    const [fileList, setFileList] = useState<UploadFile[]>([...defaultFileList]);
    // 所以使用react另外一种更新statu的方式，函数式更新
    // https://zh-hans.reactjs.org/docs/hooks-reference.html#functional-updates
    // 封装跟新数组没一项的值
    // Partial 表示可以更新任何几项
    // upDataFile: 要更新哪一项
    // upDataObj: 更新的参数
    const upDatefileList = (upDataFile: UploadFile, upDataObj: Partial<UploadFile>) => {
        return new Promise((resolve, reject) => {
            setFileList((prevFileList) => {
                // 更新列表中的某一项
                // 更新完后的值
                const newList = prevFileList.map((fileInfoItem) => {
                    if (fileInfoItem.uid === upDataFile.uid) { // upDataFile.uid：表示要更新的是哪个
                        return {
                            ...fileInfoItem,
                            ...upDataObj,// 更新的值覆盖之前的值
                        };
                    } else {
                        return fileInfoItem;// 其他的不更新
                    }
                });
                resolve(newList);
                return newList;
            });
        });
    }


    // 上传
    const upload = (file: File) => {
        // 准备上传
        // 开始往数组里放数据了
        let _file: UploadFile = {
            uid: Date.now().toString(),
            status: 'ready',
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file,
        }
        setFileList([_file, ...fileList]);

        const formData = new FormData();
        formData.append('file', file);
        if (data) {
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });
        }
        let reqMethod = axios.post;
        if (method === 'put') {
            reqMethod = axios.put;
        }

        reqMethod(action, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (e) => {
                // 正在上传
                let percent = Math.round(e.loaded / e.total * 100);
                // console.log(fileList); // 这里会一直都是空的
                // 更新数组中每一项
                upDatefileList(_file, {
                    percent, // 进度
                    status: 'uploading', // 上传中
                });

                onProgress && onProgress(percent, _file);
            }
        }).then(({ data }) => {
            upDatefileList(_file, {
                percent: 100, // 进度
                status: 'success', // 上传中
                response: data,
            }).then((_fileList: UploadFile[]) => {
                onChang && onChang(data, null, _fileList);
            });
        }).catch((error) => {
            upDatefileList(_file, {
                status: 'error', // 上传中
            }).then((_fileList: UploadFile[]) => {
                onChang && onChang(null, error, _fileList);
            });
        });
    }

    const handleFileChang = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        // 文件数组转化成数组
        const files = Array.from(e.target.files);

        // 并发上传
        files.forEach((file) => {
            if (!beforeUpload) {
                upload(file);
            } else {
                const result = beforeUpload(file);
                if (result) {
                    // 如果结果是个Promise，就使用处理后的文件上传 
                    if (result instanceof Promise) {
                        result.then((processedFile) => {
                            upload(processedFile);
                        });
                        return
                    }
                    // 如果只是个 布尔值  true， 直接上传
                    upload(file);
                }
            }
        });
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
        if (fileInput.current) {
            fileInput.current.click();
        }
    }
    console.log(fileList);
    return (
        <>
            <span onClick={buttonClick}>
                {children}
            </span>
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
