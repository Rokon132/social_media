import React from 'react';

function Food() {
    const food1 = "orange";
    const food2 = "mango";
    return (
        <food>
            <ul>
                <li>Apple</li>
                <li>Mango</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>

            </ul>
        </food>


    );
}

export default Food;