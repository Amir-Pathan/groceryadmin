import React from 'react'
import Modal from '@mui/material/Modal'
import { Box } from '@mui/system';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   // width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function ReactModal(props){

    const {isOpen,close} = props;

    return(
        <>
        <Modal open={isOpen}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
            <Box sx={style} style={{backgroundColor:'white',width:'500px'}}>
                 {props.children}
            </Box>
        </Modal>
        </>
    )

}

export default ReactModal