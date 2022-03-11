import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


const ReactModal = (props) => {
  const [open, setOpen] = useState(false);
  

  return (
    <div>
     
       <Modal open={open} onClose={() => setOpen(false)}>
       <div className='startto_box_modal startto_box_modal_kyc'>
        <p>{props.title}</p>
      </div>

      </Modal>
    </div>
  );
};

export default ReactModal;