import { h, createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import combatantTransformer from 'Transformers/Combatant';

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
        window.addOverlayListener('CombatData', (data) => {
            setInCombatState(data.isActive === 'true');
            setCombatState({ time: data.Encounter.duration, rdps: data.Encounter['encdps-*'] });
            setCombatantsState(Object.keys(data.Combatant).slice(0, 8).map((key) => combatantTransformer(data.Combatant[key])));
        });
        window.startOverlayEvents();
    }, []);

    return (
        <DataContext.Provider value={[combatState, combatantsState, inCombatState]}>
            { children }
        </DataContext.Provider>
    );
};

export default DataContext;
