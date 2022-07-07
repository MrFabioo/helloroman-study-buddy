import { useState } from "react";

const useModal = (initialState = false) => {
  const [isOpen, setModalOpen] = useState(initialState);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
