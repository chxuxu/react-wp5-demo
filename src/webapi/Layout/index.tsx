import * as React from 'react';
import { Route, Link, Routes, BrowserRouter as Router, useNavigate, useParams, Outlet } from 'react-router-dom';
import "./index.less";
export interface ILayoutProps {
}

export default function Layout(props: ILayoutProps) {
  return (
    <div className="m-layout">
      
        <div className='m-sider'>
          <div className="m-nav vertical">
            <Link to="/webapi/MediaCapabilities/111?key=222">MediaCapabilities</Link>
            <Link to="/webapi/MediaCaptureStreams/">MediaCaptureStreams</Link>
            <Link to="/webapi/MediaSession/">MediaSession</Link>
            <Link to="/webapi/MediaSourceExtensions/">MediaSourceExtensions</Link>
            <Link to="/webapi/MediaRecording/">MediaRecording</Link>
          </div>
        </div>
        <div className='m-main'>
          <Outlet />
        </div>
    </div>
  );
}
