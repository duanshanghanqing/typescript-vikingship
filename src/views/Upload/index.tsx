import React, { FC } from 'react';
import axios from 'axios';
import { Upload, Button } from '../../components';

const _Upload: FC = () => {

    const handleFileChang = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files) {
            const file = files[0];
            const formData = new FormData();
            formData.append('file', file);
            formData.append('name', 'zhangshan');
            axios.post('https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                console.log(res);
            });
        }
    }

    const defaultFileList = [
    //   { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
      { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
      { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
    ]

    return (
        <div>
            <input type="file" name="myFile" onChange={handleFileChang} />
            <br />
            <Upload
                defaultFileList={defaultFileList}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                multiple={true}
                drag={true}
                onProgress={(percentage, file) => {
                    console.log(percentage, file);
                }}
                onChang={(info, err, fileDataList) => {
                    console.log(info, err, fileDataList);
                }}
                beforeUpload={(file) => {
                    // 上传前检测文件大小
                    // const kb = Math.round(file.size / 1024);
                    // if (kb > 100) {
                    //     console.warn('文件不能大于100kb');
                    //     return false;
                    // }
                    // return true;

                    return new Promise((resolve, reject) => {
                        const kb = Math.round(file.size / 1024);
                        if (kb > 10000000) {
                            console.warn('文件不能大于100kb');
                            reject('文件不能大于100kb');
                        } else {
                            resolve(file);
                        }
                    });
                }}
            >
                <Button>选择文件</Button>
            </Upload>
        </div>
    );
}

export default _Upload;
