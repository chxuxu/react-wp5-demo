import * as React from 'react';

import TestComp from '../components/TestComp';
import imgXM from "../../assets/images/xm.jpg";
import "./App.less";
export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className="m-app">
      <img src={imgXM}/>
      <div>

      </div>
      <TestComp/>
    </div>
  );
}
