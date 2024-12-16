import React, { ComponentProps, FunctionComponent, useCallback, useEffect, useState } from 'react';

import axios from 'axios';

const ExampleComponent: FunctionComponent = function () {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
      axios.get('http://localhost:5000/api/2024/02/01')
        .then(response => {
          setMessage(response.data);
        })
        .catch(error => {
          console.error('Error fetching message: ', error);
        });
    }, []);
  
    type ButtonOnClickProp = NonNullable<ComponentProps<'button'>['onClick']>;
  
    const handleClickToSetup = useCallback<ButtonOnClickProp>(() => {
      axios.post('http://localhost:5000/api/setup/today')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Error fetching message: ', error);
      });
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p>{message || 'Loading...'}</p>
            <button onClick={handleClickToSetup}>Click to create new day setup !</button>
        </div>
    );
};

export default ExampleComponent;
