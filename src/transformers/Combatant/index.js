export default ({ Job, encdps, name, ...otherProps }) => ({
    job: Job.toLowerCase(),
    dps: otherProps['encdps-*'],
    name: name.split(' ').slice(0, 2).map((s) => s === 'YOU' ? 'You' : `${s.charAt(0)}.`).join(' '),
});
