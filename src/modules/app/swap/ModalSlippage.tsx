import React, { useState } from 'react';

import { QuestionCircleOutlined } from '@ant-design/icons';
import { InputNumber, Modal, Radio, Tooltip } from 'antd';

function ModalSlippage() {
  const [isOpen, setOpen] = useState(false);
  const onChange = (value: number | string) => {
    console.log('changed', value);
  };
  return (
    <div>
      <svg
        onClick={() => setOpen(true)}
        className="hover:opacity-70 cursor-pointer"
        width="40"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="50"
          height="50"
          rx="8"
          fill="url(#paint0_linear_0_1)"
          fill-opacity="0.8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.7549 18.8956C21.7549 16.7484 19.96 15 17.7525 15C15.5462 15 13.75 16.7484 13.75 18.8956C13.75 21.0428 15.5462 22.7887 17.7525 22.7887C19.96 22.7887 21.7549 21.0428 21.7549 18.8956ZM36.2501 31.1056C36.2501 28.9585 34.4553 27.2113 32.249 27.2113C30.0414 27.2113 28.2452 28.9585 28.2452 31.1056C28.2452 33.2528 30.0414 35 32.249 35C34.4553 35 36.2501 33.2528 36.2501 31.1056ZM30.1736 31.1056C30.1736 29.9987 31.1045 29.0981 32.2488 29.0981C33.3918 29.0981 34.3214 29.9987 34.3214 31.1056C34.3214 32.2138 33.3918 33.1131 32.2488 33.1131C31.1045 33.1131 30.1736 32.2138 30.1736 31.1056ZM22.8532 30.211C23.3854 30.211 23.8175 30.6337 23.8175 31.1544C23.8175 31.6752 23.3854 32.0978 22.8532 32.0978H14.7518C14.2195 32.0978 13.7875 31.6752 13.7875 31.1544C13.7875 30.6337 14.2195 30.211 14.7518 30.211H22.8532ZM17.7526 16.8867C16.6096 16.8867 15.6787 17.7874 15.6787 18.8956C15.6787 20.0025 16.6096 20.9018 17.7526 20.9018C18.8969 20.9018 19.8264 20.0025 19.8264 18.8956C19.8264 17.7874 18.8969 16.8867 17.7526 16.8867ZM35.5316 18.9628C35.5316 18.4421 35.0996 18.0194 34.5673 18.0194H26.4672C25.9349 18.0194 25.5029 18.4421 25.5029 18.9628C25.5029 19.4836 25.9349 19.9062 26.4672 19.9062H34.5673C35.0996 19.9062 35.5316 19.4836 35.5316 18.9628Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_1"
            x1="7.535"
            y1="60.368"
            x2="62.1124"
            y2="47.4107"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#786CFF" stop-opacity="0.5" />
            <stop offset="1" stop-color="#5AC8FA" stop-opacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
      <Modal
        footer={null}
        title="TRANSACTION SETTINGS"
        centered
        open={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <div className="flex items-center mt-4">
          <div>Slippage Tolerance</div>
          <Tooltip title="Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.">
            <QuestionCircleOutlined className="ml-2" />
          </Tooltip>
        </div>
        <div className="flex items-center mt-4">
          <Radio.Group>
            <Radio.Button value="large">0.1%</Radio.Button>
            <Radio.Button value="default">0.5%</Radio.Button>
            <Radio.Button value="small">1.00%</Radio.Button>
          </Radio.Group>
          <InputNumber
            className="ml-2"
            defaultValue={0.5}
            min={0}
            max={50}
            formatter={(value) => `${value}%`}
            parser={(value: any) => value!.replace('%', '')}
            onChange={(value) => onChange(value)}
          />
        </div>
        <div className="flex items-center mt-4">
          <div>Transaction Deadline</div>
          <Tooltip title="Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.">
            <QuestionCircleOutlined className="ml-2" />
          </Tooltip>
        </div>
        <InputNumber
          className="w-1/2 my-4"
          defaultValue={0.5}
          min={0}
          max={50}
          formatter={(value) => `${value} minutes`}
          parser={(value: any) => value!.replace('minutes', '')}
          onChange={(value) => onChange(value)}
        />
      </Modal>
    </div>
  );
}

export default ModalSlippage;
