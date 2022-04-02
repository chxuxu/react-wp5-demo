import * as React from 'react';
import { Select,DatePicker,Cascader } from 'antd';
import TestComp from '../components/TestComp';
import imgXM from "../../assets/images/xm.jpg";
import "./App.less";
import 'antd/dist/antd.css';
export interface IAppProps {
}
const { Option } = Select;
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export default function App (props: IAppProps) {
  return (
    <div className="m-app">
      <h1>page1page1page1page1page1page1</h1>
      <img src={imgXM}/>
      <div>
      <Select defaultValue="lucy" style={{ width: 120 }}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled">
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
            <Cascader options={options} placeholder="Please select" />
      </div>
      <TestComp/>
    </div>
  );
}
