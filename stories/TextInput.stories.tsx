import { fn } from '@storybook/test';
import TextInput from '../src/Inputs/TextInput';

export default {
    title: 'Inputs/TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     label: { control: 'text' },
    // },
    args: { onClick: fn() },
};

export const Default = {
    args: {
        label: 'Label',
        placeholder: 'Enter your value',
    },
};

export const WithLabel = {
    args: {
        label: 'Label',
    },
};

export const WithPlaceholder = {
    args: {
        placeholder: 'Placeholder',
    },
};

export const Full = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
    },
};

export const WithError = {
    args: {
        ...Full.args,
        error: 'Error message',
    },
};
