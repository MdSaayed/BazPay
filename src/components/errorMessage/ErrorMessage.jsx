import React from 'react';

const ErrorMessage = ({error}) => {
    return (
        <div>
            <p className="text-center text-red-500 mt-5">Error: {error}</p>
        </div>
    );
};

export default ErrorMessage;