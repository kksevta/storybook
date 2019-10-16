import { configure } from '@storybook/react';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

// // automatically import all files ending in *.stories.js
// configure(require.context('../src', true, /\.stories\.js$/), module);


registerRequireContextHook();

const req = global.__requireContext(__dirname, '../src', true, /\.stories\.js$/)

configure(req, module);
