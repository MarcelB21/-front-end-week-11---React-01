import React from 'react';

function Button ({buttonMessage, buttonTitle, enabled, typeOfButton}) {
    return (
        <>
            <button type={typeOfButton} disabled={enabled} onClick={() => console.log({buttonMessage})}>{buttonTitle}</button>
        </>
    );
}

export default Button;