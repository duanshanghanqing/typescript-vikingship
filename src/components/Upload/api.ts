import axios from 'axios';

export const uploadFiles = async (files: FileList) => {

    let index: number = 0;
    function upload(file: File) {
        const formData = new FormData();
        formData.append('file', file);
        axios.post('https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
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

