import { Collapse } from 'antd';
import React, {useState} from 'react';
import DropDown from '../shared/DropDown';
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getDropDownItems = (items) => {
  return items.map((item, index)=>{
      return {
          label: (
              <button>{item}</button>
          ),
          key: index,
      }
  });
}

const LeftMenu = () => {
  const [sections, setSections] = useState(3);

  const onChange = (key) => {
    console.log(key);
  };

  
  return (
    <>
      <DropDown items={getDropDownItems([1, 2, 3, 4])}/>
      <Collapse defaultActiveKey={['1']} onChange={onChange}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </>    
  );
};
export default LeftMenu;