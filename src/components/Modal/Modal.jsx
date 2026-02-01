import ReactModal from "react-modal";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal 
      isOpen={isOpen}
     onRequestClose={onClose}              
      shouldCloseOnOverlayClick={true}      
      shouldCloseOnEsc={true}    
        appElement={document.getElementById('root')}
      
 style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px", 
        },
        content: {
          position: "relative",
          inset: "auto",
          backgroundColor: "#85AA9F",
          borderRadius: "15px",
          padding: "28px 16px",
          maxWidth: "400px",
          width: "100%",
          borderColor:"#85AA9F"
        },
      }}


    >
      {children}
    </ReactModal>
  );
};


export default Modal;
