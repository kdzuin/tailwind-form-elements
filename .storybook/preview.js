/** @type { import('@storybook/react').Preview } */

import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../src/tailwind.css';

const preview = {
    parameters: {
        controls: {
            // matchers: {
            //     color: /(background|color)$/i,
            //     date: /Date$/i,
            // },
        },
    },
};

export const decorators = [
    withThemeByDataAttribute({
        themes: {
            light: 'light',
            dark: 'dark',
        },
        defaultTheme: 'light',
        attributeName: 'data-mode',
    }),
];

export default preview;
