import React, { useState } from 'react';
import { Route, Link, Routes, BrowserRouter as Router, useNavigate, useParams, Outlet } from 'react-router-dom';
import SubNav from "./SubNav";
import UseStateDemo from "../hooks/useStateDemo";
import UseEffectDemo from "../hooks/useEffectDemo";
import UseContextDemo from "../hooks/useContextDemo";
import UseReducerDemo from "../hooks/useReducerDemo";
import UseDeferredValueDemo from "../hooks/useDeferredValueDemo";
import "./index.less";
export interface IHomeProps {
}

export default function AppHome(props: IHomeProps) {
  return (
    <div className="g-Home">
      <div className='g-layout'>
        <div className='g-sider'>
          <SubNav />
        </div>
        <div className='g-main'>
          <div className='g-header'>
            <nav className="m-nav vertical">
              <Link to="/home/useState">useState</Link>
              <Link to="/home/useEffect">useEffect</Link>
              <Link to="/home/useContext">useContext</Link>
              <Link to="/home/useReducer">useReducer</Link>
              <Link to="/home/useDeferredValue">useDeferredValue</Link>
            </nav>
          </div>
          <Routes>
            <Route path="useState" element={<UseStateDemo />} />
            <Route path="useEffect" element={<UseEffectDemo />} />
            <Route path="useContext" element={<UseContextDemo />} />
            <Route path="useReducer" element={<UseReducerDemo />} />
            <Route path="useDeferredValue" element={<UseDeferredValueDemo />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
