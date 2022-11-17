import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React from 'react';

const DropDown = ({items}) => (
    <Dropdown
        menu={{
        items,
        }}
    >
        <a onClick={(e) => e.preventDefault()}>
        <Space>
            No of Selctions : 
            <DownOutlined />
        </Space>
        </a>
    </Dropdown>
);
export default DropDown;