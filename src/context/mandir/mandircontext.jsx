import React, { useState, createContext } from 'react';

// Create the context
const Mandir = createContext();

// Create the provider component
const Pandit = ({ children }) => {
    const [prasad, setPrasad] = useState(2);  // Initial value for prasad
    const [ashirvaad, setAshirvaad] = useState("badhiya kamao badhiya jeeyo");  // Corrected ashirvaad spelling

    return (
        // Provide the context values to the children components
        <Mandir.Provider value={{ prasad, setPrasad, ashirvaad, setAshirvaad }}>
            {children}
        </Mandir.Provider>
    );
};

export { Pandit, Mandir };
