import * as React from 'react';
import { Route, Link, Routes, BrowserRouter as Router, useNavigate } from 'react-router-dom';

import Home from "./modules/home";
import Hooks from "./modules/hooks";
import "./App.less";
export interface IAppProps {
}

function App(props: IAppProps) {
  return (<Router>
    <div className="m-app m-layout">
      <div className="header">
        <ul className="m-nav">
          <li className="nav-item"><Link to="/">首页</Link></li>
          <li className="nav-item"><Link to="/hooks">hooks</Link></li>
        </ul>
      </div>
      
        <Routes>
          <Route path={"/"} element={<Home/>}>
            <Route path={"aaa"} element={<div>这是home/aaa子路由的内容</div>}>
            </Route>
          </Route>
          <Route path={"/home"} element={<Home/>}>
           
          </Route>
          <Route path={"/hooks/*"} element={<Hooks/>}>
          </Route>
        </Routes>
      
      <div className="footer">
        footer
      </div>
    </div>
    </Router>
  );
}

export default App;
