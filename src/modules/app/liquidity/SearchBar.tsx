import React from 'react';

import { Button, Select, Switch } from 'antd';

function SearchBar() {
  return (
    <div className="flex justify-between items-center opacity-60">
      <div className="flex items-center">
        <Select
          defaultValue="all"
          style={{ width: 120 }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'all', label: 'All' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
        <Button className="ml-4" type="text">
          + ADD LIQUIDITY
        </Button>
      </div>
      <div className="text-xs opacity-60">
        <Switch size="small" defaultChecked />
        <span className="ml-2">CAMPAIGNS</span>
        <Switch className="ml-8" size="small" defaultChecked />
        <span className="ml-2">MY PAIRS</span>
        <span className="ml-8">SHORT BY:TVL</span>
      </div>
    </div>
  );
}

export default SearchBar;
