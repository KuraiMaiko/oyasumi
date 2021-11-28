import { h } from 'preact';
import { useContext } from 'preact/hooks';
import Combatant from 'Components/Combatant';
import Icon from 'Components/Icon';
import DataContext from 'Contexts/Data';

/**
 * @returns {JSX.Element}
 */
export default () => {
    const [combatState, combatantsState, inCombatState] = useContext(DataContext);

    if (!inCombatState) {
        return;
    }

    return (
        <div class="w">
            <div class="header">
                <div class="tt">
                    <div class="t"><Icon name="clock" height="20" width="20" /><span class="-pls">{ combatState.time }</span></div>
                    <span class="d">{ combatState.rdps }</span>
                </div>
                {
                    combatantsState.map((combatant) => <Combatant {...combatant} />)
                }
            </div>
        </div>
    );
};
