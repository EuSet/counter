import React from 'react';
import {Story, Meta} from '@storybook/react';
import {PropsType, UniversalButton} from "./UniversalButton";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UniversalButton',
    component: UniversalButton,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const Template: Story<PropsType> = (args) => <UniversalButton {...args} universalFunction={btnCallBack}/>;
const btnCallBack = action('onClick function')
export const Primary = Template.bind({});
Primary.args = {
    title: 'Menu',
    color: "primary",
    variant: "outlined"

};