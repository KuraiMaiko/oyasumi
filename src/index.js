import { h, render } from 'preact';
import App from './app';
import './ws';
import './styles/index.scss';

render(<App />, document.querySelector('body'));
