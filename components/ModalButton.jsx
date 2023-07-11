"use client";
import { motion } from "framer-motion";
export default function ModalButton({ child1, child2, modalId, type }) {
  const openModal = () => {
    const modal = document.getElementById(modalId);
    modal.showModal();
  };
  return (
    <>
      <motion.button
        layout
        onClick={openModal}
        whileHover={{
          scale: 1.2,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 20,
          },
        }}
        className={`group w-fit font-medium rounded-md bg-slate-200 pb-6 pt-3 shadow-3xl shadow-blue-secondary modal-${type}`}
      >
        <motion.div
          whileHover={{ scale: 0.8 }}
          className="flex justify-center items-center text-center text-2xl w-80 sm:h-28 h-16 group-hover:hidden"
        >
          <h2>{child1}</h2>
        </motion.div>
        <motion.div
          whileHover={{ scale: 0.8 }}
          className="hidden flex-col justify-center text-center text-2xl
          w-80 sm:h-28 h-16 group-hover:flex"
        >
          <h2 className=" text-white">{child2}</h2>
        </motion.div>
      </motion.button>
    </>
  );
}
