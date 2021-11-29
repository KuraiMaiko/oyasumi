import { h, createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const DataContext = createContext([{}, []]);

/**
 * @param {Object} props
 * @param {JSX} props.children
 * @returns {JSX.Element}
 */
export const DataContextProvider = ({ children }) => {
    const [combatState, setCombatState] = useState({});
    const [combatantsState, setCombatantsState] = useState([]);
    const [inCombatState, setInCombatState] = useState(false);

    useEffect(() => {
        setInCombatState(true);
        setCombatState({ time: '08:20', rdps: '128K' });
        setCombatantsState([
            { job: 'mch', dps: '24.22k', name: 'S.C.' },
            { job: 'mch', dps: '24.22k', name: 'S.C.' },
            { job: 'mch', dps: '24.22k', name: 'S.C.' },
            { job: 'mch', dps: '24.22k', name: 'S.C.' },
            { job: 'mch', dps: '24.22k', name: 'S.C.' },
            { job: 'mch', dps: '24.22k', name: 'S.C.' },
            { job: 'mch', dps: '24.22k', name: 'S.C.' },
            { job: 'mch', dps: '24.22k', name: 'S.C.' },
        ]);
    }, []);

    return (
        <DataContext.Provider value={[combatState, combatantsState, inCombatState]}>
            { children }
        </DataContext.Provider>
    );
};

export default DataContext;
