import { Modal } from "flowbite-react";

const Login = ({ openModal, setOpenModal }) => {
  return (
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="flex justify-center">
          <h1 className="text-black1  font-semibold antialiased text-2xl mb-10">
            Welcome back!
          </h1>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
