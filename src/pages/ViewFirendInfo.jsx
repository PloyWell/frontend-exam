import React, { useEffect, useState } from 'react';
import CreateUser from '@features/CreateUser';
import Header from '@features/Header';
import Content from '@features/Content';
import Filter from '@features/Filter';
import Modal from '@components/Modal';

const mockFriendDataList = [
  { id: '1', firstName: 'test1', lastName: 'test1', phone: '0000000000' },
  { id: '2', firstName: 'hello', lastName: 'hello', phone: '0000000000' },
  { id: '3', firstName: 'test1', lastName: 'test1', phone: '0000000000' },
];

function ViewFirendInfo() {
  const [friendDataList, setFriendDataList] = useState(mockFriendDataList);
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const validateData = () => {
    try {
      // You can write code under this line.
    } catch (err) {
      // handler error
    }
  };

  const getDataByID = () => {
    try {
      // You can write code under this line.
    } catch (err) {
      // handler error
    }
  };

  const createNewDataHandler = () => {
    try {
      console.log('Create Function');
      // You can write code under this line.
    } catch (err) {
      // handler error
    }
  };

  const editDataHandler = () => {
    try {
      console.log('Edit Function');
      // You can write code under this line.
    } catch (err) {
      // handler error
    }
  };

  const deleteDataHandler = () => {
    try {
      // You can write code under this line.
    } catch (err) {
      // handler error
    }
  };

  // optional Bonus point if you can do filter function
  const FilterDataHandler = () => {
    try {
      console.log('Filter Function');
      // do some thing
    } catch (err) {
      // handler error
    }
  };

  return (
    <div className="m-20 flex justify-center">
      <div className="flex flex-col justify-center gap-8 ">
        <Header />
        <CreateUser setOpenModal={setOpenModal} />
        <Filter />
        <Content
          friendDataList={friendDataList}
          openModal={openModal}
          setOpenModal={setOpenModal}
          setIsEdit={setIsEdit}
        />
        <Modal
          setOpenModal={setOpenModal}
          openModal={openModal}
          isEdit={isEdit}
        />
      </div>
    </div>
  );
}

export default ViewFirendInfo;
