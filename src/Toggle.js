import React, { useState } from 'react';

const Toggle = () => {
    const [isToggled, toggle] = useState(false);

    return(
        <div>
            {console.log(isToggled)}
            <button onClick={() => toggle(!isToggled)}>Toggle</button>
        </div>
    )
}

export default Toggle;