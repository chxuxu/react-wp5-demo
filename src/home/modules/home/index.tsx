import React,{useState} from 'react';
import { Route, Link, Routes, BrowserRouter as Router, useNavigate,useParams,Outlet  } from 'react-router-dom';
import { Layout, Nav } from "rexui";
import SubNav from "./SubNav";
import UseStateDemo from "../hooks/useStateDemo";
import UseEffectDemo from "../hooks/useEffectDemo";
import UseContextDemo from "../hooks/useContextDemo";
import UseReducerDemo from "../hooks/useReducerDemo";
import UseDeferredValueDemo from "../hooks/useDeferredValueDemo";
import "./index.less";
export interface IHomeProps {
}

export default function AppHome (props: IHomeProps) {
  return (
    <div className="g-Home">
      <Layout>
      <Layout.Sider>
        <SubNav/>
      </Layout.Sider>
        <Layout.Main>
          <Layout.Header>
              <nav className="m-nav vertical">
              <Link to="/home/useState">useState</Link>
              <Link to="/home/useEffect">useEffect</Link>
              <Link to="/home/useContext">useContext</Link>
              <Link to="/home/useReducer">useReducer</Link>
              <Link to="/home/useDeferredValue">useDeferredValue</Link>
            </nav>
          </Layout.Header>
          <Routes>
            <Route path="useState" element={<UseStateDemo />} />
            <Route path="useEffect" element={<UseEffectDemo />} />
            <Route path="useContext" element={<UseContextDemo />} />
            <Route path="useReducer" element={<UseReducerDemo />} />
            <Route path="useDeferredValue" element={<UseDeferredValueDemo />} />
          </Routes>
        </Layout.Main>
        </Layout>
    </div>
  );
}
