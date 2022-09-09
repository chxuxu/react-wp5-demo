import * as React from 'react';
import { Route, Link, Routes, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Logo from "./header/Logo";
import LoginInfo from "./header/LoginInfo";
import HeadNav from "./header/HeadNav";
import FootInfo from "./Footer";
import Home from "./modules/home";
import Hooks from "./modules/hooks";
import "./App.less";
export interface IAppProps {
}

function App(props: IAppProps) {
  return (<Router>
    <div className='g-layout'>
      <div className="g-header">
        <Logo />
        <HeadNav />
        <LoginInfo />
      </div>
      <div className="g-main">
        <Routes>
          <Route path={"/"} element={<Home />}>
            <Route path={"aaa"} element={<div>这是home/aaa子路由的内容</div>}>
            </Route>
          </Route>
          <Route path={"/home/*"} element={<Home />}>

          </Route>
          <Route path={"/hooks/*"} element={<Hooks />}>
          </Route>
        </Routes>
      </div>
      <div className='g-footer'>
        <FootInfo />
      </div>
    </div>
  </Router>
  );
}

export default App;
