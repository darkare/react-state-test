import React, {useState, useEffect, useLayoutEffect} from 'react';

const TabFunction = () => {
    
    let [value, setValue] = useState(199);

    useEffect( () => {
      console.log('TAB Function: running use effect');
      // console.log(localStorage.getItem('ws'));
     }
    )

    const handleClick1 = () => {
      console.log('handleClick');  
      throw new Error('Crashed in Tab Function');
    };

   return (<div>
            This Tab Function<br/>
            <button onClick={()=>handleClick1()} >Throw Error</button>
        </div>);
      
}

export default TabFunction;