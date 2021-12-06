import { h } from 'preact';
import Icon from 'Components/Icon';

/**
 * @type {Array}
 */
const jobs = [
    'acn',
    'arc',
    'ast',
    'blm',
    'blu',
    'brd',
    'cnj',
    'dnc',
    'drg',
    'drk',
    'gla',
    'gnb',
    'lnc',
    'mch',
    'mnk',
    'mrd',
    'nin',
    'pld',
    'pgl',
    'rdm',
    'rog',
    'rpr',
    'sam',
    'sch',
    'sge',
    'smn',
    'thm',
    'war',
    'whm',
];

/**
 * @param {Object} props
 * @param {string} props.job
 * @param {string} props.name
 * @param {string} props.dps
 * @returns {JSX.Element}
 */
export default ({ job, name, dps }) => (
    <div class="ct">
        <div class="j">
            <Icon classes="-fsh0" name={jobs.includes(job) ? job : 'default'} />
            <span> { name } </span>
        </div>
        <span class="-m -fs18">{ dps }</span>
    </div>
);
