import { Button, Modal } from "flowbite-react";
import { BsExclamationOctagon } from "react-icons/bs";

const ConfirmationMessage = ({
  openModal,
  setOpenModal,
  message,
  setOrderForm,
}) => {
  return (
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <BsExclamationOctagon className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {message}
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="failure"
              onClick={() => {
                setOpenModal(false), setOrderForm(false);
              }}
            >
              {"Yes, I'm sure"}
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmationMessage;
