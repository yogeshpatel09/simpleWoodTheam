import React from 'react';
import { useContext } from 'react';
import { Mandir } from '../context/mandir/mandircontext';

const ContextSamjho = () => {
    const { prasad, ashirvad } = useContext(Mandir); // Consuming the context
    console.log(prasad, ashirvad); // Logging values for debugging
    
    return (
        <div>
            hihihihi
            {prasad} {/* Should display "2" */}
            {ashirvad} {/* Should display "badhiya kamao badhiya jeeyo" */}
        </div>
    );
}

export default ContextSamjho;
