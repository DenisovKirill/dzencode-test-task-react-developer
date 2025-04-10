'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ReactNode, useState } from 'react';

type ModalProps = {
  triggerIcon: ReactNode;
  modalTitle: string;
  modalContent?: ReactNode;
  onApplyAction: (value?: unknown) => void;
};

export const Modal = ({ triggerIcon, modalTitle, modalContent, onApplyAction }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="flex items-center gap-2">
        {triggerIcon}
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        transition
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4  transition duration-500 ease-out data-[closed]:opacity-0"
      >
        <DialogPanel className=" flex flex-col gap-5 max-w-lg space-y-4 bg-white p-8 rounded-xl">
          <DialogTitle className="font-bold mb-0">{modalTitle}</DialogTitle>
          {modalContent}
          <div className="flex gap-6 justify-end">
            <button
              className="bg-green-200 px-4 py-2 rounded-xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-200 px-4 py-2 rounded-xl cursor-pointer"
              onClick={onApplyAction}
            >
              Ok
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};
