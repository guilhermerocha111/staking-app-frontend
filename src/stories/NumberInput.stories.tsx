import {NumberInput} from '../components/Input'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from "react";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Input',
    component: NumberInput,
  } as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => {
    const [stakeAmount, setStakeAmount] = useState<string>("0");

    return (
        <NumberInput {...args} setValue={setStakeAmount} value={stakeAmount}/>
    )
}


export const Number = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Number.args = {
    placeholder: 'Enter token amount',
    min: 1000,
    max: 21000,
    step: 1000,
    roundTo: 1000
};
