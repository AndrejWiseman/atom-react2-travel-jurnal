import React from 'react';
import './style.css';

import Navbar from './components/Navbar';
import Card from './components/Card';

import data from './data'


function App() {

    let podaci = data.map( pod => {
        return (
            < Card
                key={pod.id}
                pod={pod}
            />
        )
    })


    return (
    <div className="container">

      <Navbar />

        {podaci}


    </div>
    );
}

export default App;
