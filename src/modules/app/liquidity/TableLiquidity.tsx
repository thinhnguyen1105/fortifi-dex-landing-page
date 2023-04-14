import React from 'react';

import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  pair: string;
  volume: string;
  tvl: string;
  campaigns: string[];
  apy: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'PAIR',
    dataIndex: 'pair',
    key: 'pair',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'CAMPAIGNS',
    dataIndex: 'campaigns',
    key: 'campaigns',
    render: (_, { campaigns }) => (
      <>
        {campaigns.map((cp) => {
          let color = cp.length > 5 ? 'geekblue' : 'green';
          if (cp === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={cp}>
              {cp.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'TVL',
    dataIndex: 'tvl',
    key: 'tvl',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '24H VOLUME',
    key: 'volume',
    dataIndex: 'volume',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'APY',
    key: 'apy',
    render: (_, { apy }) => <div>{apy}</div>,
  },
];

const data: DataType[] = [
  {
    key: '1',
    pair: 'DAI/ETH',
    campaigns: ['Farming', 'Stake'],
    tvl: '$800,133',
    volume: '$8',
    apy: '0%',
  },
  {
    key: '1',
    pair: 'DAI/ETH',
    campaigns: ['Farming', 'Stake'],
    tvl: '$800,133',
    volume: '$8',
    apy: '0%',
  },
  {
    key: '1',
    pair: 'DAI/ETH',
    campaigns: ['Farming', 'Stake'],
    tvl: '$800,133',
    volume: '$8',
    apy: '0%',
  },
  {
    key: '1',
    pair: 'DAI/ETH',
    campaigns: ['Farming', 'Stake'],
    tvl: '$800,133',
    volume: '$8',
    apy: '0%',
  },
];

const TableLiquidity: React.FC = () => (
  <Table columns={columns} dataSource={data} />
);

export default TableLiquidity;
