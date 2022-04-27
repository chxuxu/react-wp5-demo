import * as React from 'react';
import { Route, Link, Routes, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { Layout, Nav } from "rexui";
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
    <Layout>
      <Layout.Header>
        <div className="g-header">
          <Logo/>
          <HeadNav/>
          <LoginInfo/>
        </div>
      </Layout.Header>
      <Layout.Main>
        <Routes>
          <Route path={"/"} element={<Home />}>
            <Route path={"aaa"} element={<div><Nav/>这是home/aaa子路由的内容</div>}>
            </Route>
          </Route>
          <Route path={"/home/*"} element={<Home />}>

          </Route>
          <Route path={"/hooks/*"} element={<Hooks />}>
          </Route>
        </Routes>
      </Layout.Main>
      <Layout.Footer>
        <FootInfo/>
      </Layout.Footer>
    </Layout>
  </Router>
  );
}

export default App;
