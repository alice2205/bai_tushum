import React from 'react'
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import s from './addFile.module.css'

export function AddFile (props) {
    return <>
        <div className={s.content}>
            <p>{props.name}</p>
            <div>
                <Upload>
                    <Button icon={<UploadOutlined />}>Выбрать файл</Button>
                </Upload>
            </div>
        </div>
    </>

}