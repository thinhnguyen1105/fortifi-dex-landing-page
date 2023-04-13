import React from 'react';

import ModalSlippage from './ModalSlippage';

function TitleSwap() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col items-center">
        <div className="text-lg font-bold mb-2">Swap</div>
        <svg
          width="90"
          height="2"
          viewBox="0 0 146 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M146 1L-2.74181e-06 0.999972"
            stroke="url(#paint0_linear_308_947)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_308_947"
              x1="1.30689"
              y1="0.497829"
              x2="142.639"
              y2="0.497766"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DCD9FC" stop-opacity="0" />
              <stop offset="0.5" stop-color="#DCD9FC" />
              <stop offset="0.963542" stop-color="#DCD9FC" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <ModalSlippage />
    </div>
  );
}

export default TitleSwap;
