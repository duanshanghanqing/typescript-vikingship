import React, { FC } from 'react';
import axios from 'axios';
import { Upload } from '../../components';

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

    return (
        <div>
            <input type="file" name="myFile" onChange={handleFileChang} />
            <br />
            <Upload 
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                multiple={true}
                onProgress={(percentage, file) => {
                    console.log(percentage, file);
                }}
                onChang={(fileData, fileDataList) => {
                    console.log(fileData, fileDataList);
                }}
                onEnd={(fileDataList) => {
                    console.log(fileDataList);
                }}
            />
        </div>
    );
}

export default _Upload;
