import React from 'react';

import { Avatar, Button, Input, Modal } from 'antd';

import ListToken from './ListTokens';
import { listTokens } from '../../../helpers/listTokens';

interface IProps {
  isOpenDialog: boolean;
  handleConfirm: Function;
  handleCancel: Function;
}

function ModalSelectToken(props: IProps) {
  return (
    <Modal
      title="Select Token"
      open={props.isOpenDialog}
      onOk={() => props.handleConfirm()}
      onCancel={() => props.handleCancel()}
    >
      <Input
        size="large"
        className="mt-4"
        placeholder="Search by name, symbol or address"
      />
      <div className="mt-4">Common tokens</div>
      <div className="grid grid-cols-4 gap-2 items-center mt-4">
        {Object.values(listTokens).map((token, index) => {
          return (
            <Button
              key={index}
              className="flex items-center"
              size="large"
              icon={
                <Avatar
                  className="mr-2"
                  size={'small'}
                  src={<img src={token.image} alt="avatar" />}
                />
              }
            >
              {String(token.name).toUpperCase()}
            </Button>
          );
        })}
      </div>
      <div className="mt-4">Token name</div>
      <ListToken />
    </Modal>
  );
}

export default ModalSelectToken;
