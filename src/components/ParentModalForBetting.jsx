import React, { useState } from 'react';
import { Button } from '@mui/material';
import MyModal from './MyModal'; // Import the modal component

const ParentModalForBetting = () => {
  const [openModal, setOpenModal] = useState(false);
  const [receivedData, setReceivedData] = useState('');

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleReceiveData = (data) => {
    // Handle received data from the modal
    setReceivedData(data);
  };

  return (
    <div>
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <p>Received Data: {receivedData}</p>
      <MyModal open={openModal} onClose={handleCloseModal} sendData={handleReceiveData} />
    </div>
  );
};

export default ParentModalForBetting;