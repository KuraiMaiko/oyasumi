import { h } from 'preact';
import Page from 'Components/Page';
import { DataContextProvider } from 'Contexts/Data';

/**
 * @returns {JSX.Element}
 */
export default () => (
    <main>
        <DataContextProvider>
            <Page />
        </DataContextProvider>
    </main>
);
