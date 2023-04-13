import React from 'react';

import { Button } from 'antd';

import IconSwap from './IconSwap';
import PrimaryExchange from './PrimaryExchange';

function BodySwap() {
  return (
    <div className="relative">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-2">
        <IconSwap />
      </div>
      <PrimaryExchange />
      <PrimaryExchange />
      <div className="flex justify-between text-xs mt-16 text-violet-500">
        <div>Slippage Tolerance</div>
        <div>0.5%</div>
      </div>
      <Button
        rootClassName=" bg-violet-800 font-bold h-12"
        className="mt-4"
        type="primary"
        block
      >
        CONNECT WALLET
      </Button>
    </div>
  );
}

export default BodySwap;
