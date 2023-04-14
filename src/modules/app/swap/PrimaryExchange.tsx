import React, { useState } from 'react';

import { CaretDownOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import ModalSelectToken from './ModalSelectToken';
import { listTokens } from '../../../helpers/listTokens';

function PrimaryExchange() {
  const [isOpenDialog, setOpenDialog] = useState(false);
  const openSelectTokenDialog = () => {
    setOpenDialog(true);
    console.log('open');
  };
  return (
    <div>
      <div className="flex justify-between text-xs mt-2">
        <div className="ml-6">From</div>
        <div>Balance: 0</div>
      </div>
      <div className="bg-indigo-200/20 p-4 text-white w-full rounded-md mt-1 flex justify-between">
        <div className="py-1 text-3xl">0.00</div>
        <div
          onClick={() => openSelectTokenDialog()}
          className="py-1 flex items-center cursor-pointer"
        >
          <Avatar
            size={'small'}
            src={<img src={listTokens.eth.image} alt="avatar" />}
          />
          <div className="mx-2">ETH</div>
          <CaretDownOutlined />
        </div>
      </div>
      <ModalSelectToken
        isOpenDialog={isOpenDialog}
        handleConfirm={() => {}}
        handleCancel={() => setOpenDialog(false)}
      />
    </div>
  );
}

export default PrimaryExchange;
