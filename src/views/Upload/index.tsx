import React, { FC } from 'react';
import axios from 'axios';

const Upload: FC = () => {

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
            <input type="file" name="myFile" onChange={handleFileChang}/>
        </div>
    );
}

export default Upload;
