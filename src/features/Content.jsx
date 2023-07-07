import React from 'react';
import Item from '@components/Item';

function Content({ friendDataList = [], setOpenModal, setIsEdit }) {
  return (
    <div className="rounded border border-b-0 border-gray-300">
      {friendDataList?.map((friendData) => (
        <Item
          key={friendData?.id}
          friendData={friendData}
          deleteItem={() => console.log('function delete')}
          editItem={() => {
            setOpenModal(true);
            setIsEdit(true);
            console.log('function edit');
          }}
        />
      ))}
    </div>
  );
}

export default Content;
