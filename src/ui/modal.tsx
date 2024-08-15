import React, { FC } from 'react';
import { TextField } from './input';
import { IconArrowRight, IconX } from '@tabler/icons-react';

type ModalProps = {
  opened: boolean;
  trigger: () => void;
};

const Modal: FC<ModalProps> = ({ opened, trigger }) => {
  return (
    <React.Fragment>
      {opened ? (

        // form login
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
     <div className="relative w-full max-w-md p-6 text-white bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
       <div
         onClick={() => trigger()}
         className="absolute flex items-center justify-center w-8 h-8 text-white transition-transform duration-200 bg-red-500 rounded-full cursor-pointer top-2 right-2 hover:scale-110"
       >
         <IconX size={20} />
       </div>
       <h2 className="mb-6 text-3xl font-bold text-center">Login with Email</h2>
       <TextField
         label="Email"
         className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <TextField
         label="Password"
         className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <button className="flex items-center justify-center w-full gap-2 py-3 font-semibold text-white transition-shadow duration-200 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg">
         Continue
         <IconArrowRight />
       </button>
     </div>
   </div>
   
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
