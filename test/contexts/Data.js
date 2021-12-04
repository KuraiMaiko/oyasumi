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
            { job: 'sam', dps: '31.1k', name: 'M. S.' },
            { job: 'blm', dps: '28.75k', name: 'F. N.' },
            { job: 'rpr', dps: '24.23k', name: 'E. B.' },
            { job: 'mch', dps: '24.22k', name: 'S. C.' },
            { job: 'war', dps: '14.51k', name: 'H. G.' },
            { job: 'drk', dps: '12.90k', name: 'E. U.' },
            { job: 'ast', dps: '11.11k', name: 'A. P.' },
            { job: 'sge', dps: '10.42k', name: 'C. B.' },
        ]);
    }, []);

    return (
        <DataContext.Provider value={[combatState, combatantsState, inCombatState]}>
            { children }
        </DataContext.Provider>
    );
};

export default DataContext;
