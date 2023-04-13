import React from 'react';

import { CaretDownOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

function PrimaryExchange() {
  const url =
    'https://ih1.redbubble.net/image.3060066889.0149/st,small,845x845-pad,1000x1000,f8f8f8.jpg';
  return (
    <div>
      <div className="flex justify-between text-xs mt-2">
        <div className="ml-6">From</div>
        <div>Balance: 0</div>
      </div>
      <div className="bg-indigo-200/20 p-4 text-white w-full rounded-md mt-1 flex justify-between">
        <div className="py-1 text-3xl">0.00</div>
        <div className="py-1 flex items-center">
          <Avatar size={'small'} src={<img src={url} alt="avatar" />} />
          <div className="mx-2">BNB</div>
          <CaretDownOutlined />
        </div>
      </div>
    </div>
  );
}

export default PrimaryExchange;
