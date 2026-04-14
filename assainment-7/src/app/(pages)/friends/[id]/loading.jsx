import React from 'react';
import { PuffLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <PuffLoader color="green" />
        </div>
    );
};

export default loading;
