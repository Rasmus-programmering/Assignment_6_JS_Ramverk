import React from 'react';

const SortButtons = ({ onSortChange }) => {
    return (
        <div>
            <button onClick={() => onSortChange('alphabetical')}>Sortera alfabetiskt</button>
            <button onClick={() => onSortChange('rating')}>Sortera efter betyg</button>
        </div>
    );
};

export default SortButtons;
