"use client";

import { FC } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "../ui/modal";

interface StoreModalProps {}

const StoreModal: FC<StoreModalProps> = ({}) => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      create store form
    </Modal>
  );
};

export default StoreModal;
