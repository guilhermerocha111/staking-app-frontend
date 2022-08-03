import Select from '../components/Select'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from "react";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Select',
    component: Select,
  } as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [selectValue, setSelectValue] = useState<string>("1");

  return (
      <div className="gap-2" style={{background: 'black'}}>
        <Select {...args} onChange={(e) => setSelectValue(e.target.value)} value={selectValue}/>

        <div className="p-4" style={{color: 'white'}}>Selected option: {selectValue}</div>
      </div>
  )
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    className: "select-alt",
    options: [{
      value: '1',
      label: 'First option'
    },{
      value: '2',
      label: 'Second option'
    }],
    placeholder: 'Default placeholder'
};