import React, { useState, useEffect, useMemo } from 'react';

function App() {
    const [tech, setTech] = useState([]);
    const [newTech, setNewTech] = useState('');

    function handleAdd() {
        setTech([...tech, newTech]);
    }

    useEffect(() => {
        const storageTech = localStorage.getItem('tech');

        if (storageTech) {
            setTech(JSON.parse(storageTech));
        }

        // Like unmount life ciclye
        // return () => {};
    }, []);

    useEffect(() => {
        localStorage.setItem('tech', JSON.stringify(tech));
    }, [tech]);

    const techSize = useMemo(() => tech.length, [tech]);

    return (
        <>
            <ul>
                {tech.map(t => (
                    <li key={t}>{t}</li>
                ))}
            </ul>
            <strong>You have {techSize} new technologies </strong>
            <br />
            <input value={newTech} onChange={e => setNewTech(e.target.value)} />
            <button type="button" onClick={handleAdd}>
                Add
            </button>
        </>
    );
}

export default App;
