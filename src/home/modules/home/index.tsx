import React,{useState} from 'react';
import { Route, Link, Routes, BrowserRouter as Router, useNavigate,useParams,Outlet  } from 'react-router-dom';

export interface IHomeProps {
}

export default function AppHome (props: IHomeProps) {
  return (
    <div className="m-AppHooks">
      <div className="sider">
        sider
        </div>
        <div className="content">
        <Outlet/>
        content
        
      </div>
    </div>
  );
}
