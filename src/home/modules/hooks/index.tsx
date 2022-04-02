import React, { useState } from 'react';
import { Route, Link, Routes, BrowserRouter as Router, useNavigate,useParams,Outlet  } from 'react-router-dom';
import UseStateDemo from "./useStateDemo";
import UseEffectDemo from "./useEffectDemo";
import UseContextDemo from "./useContextDemo";
import UseReducerDemo from "./useReducerDemo";
import UseDeferredValueDemo from "./useDeferredValueDemo";
export interface IHooksProps {
}

export default function AppHooks(props: IHooksProps) {
  return (
    <div className="m-AppHooks g-main">
      <div className="sider">
        <nav className="m-nav vertical">
          <Link to="/hooks/useState">useState</Link>
          <Link to="/hooks/useEffect">useEffect</Link>
          <Link to="/hooks/useContext">useContext</Link>
          <Link to="/hooks/useReducer">useReducer</Link>
          <Link to="/hooks/useDeferredValue">useDeferredValue</Link>
        </nav>
      </div>
      <div className="content">
        <Routes>
          <Route path="useState" element={<UseStateDemo />} />
          <Route path="useEffect" element={<UseEffectDemo />} />
          <Route path="useContext" element={<UseContextDemo />} />
          <Route path="useReducer" element={<UseReducerDemo />} />
          <Route path="useDeferredValue" element={<UseDeferredValueDemo />} />
        </Routes>
        <Outlet/>
      </div>
    </div>
  );
}
