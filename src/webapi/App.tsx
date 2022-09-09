import * as React from 'react';
import { Route, Link, Routes, BrowserRouter as Router, useNavigate, useParams, Outlet } from 'react-router-dom';
import MediaCapabilities from "./modules/MediaCapabilities";
import MediaCaptureStreams from "./modules/MediaCaptureStreams";
import MediaSession from "./modules/MediaSession";
import MediaSourceExtensions from "./modules/MediaSourceExtensions";
import MediaRecording from "./modules/MediaRecording";
import "./App.less";
import Layout from "./Layout";
export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <div className="m-app">
      <Router>
        <Routes>
          <Route path="/webapi" element={<Layout />}>
            <Route index element={<MediaCapabilities />} />
            <Route path="MediaCapabilities/:id" element={<MediaCapabilities />} />
            <Route path="/webapi/MediaCaptureStreams/" element={<MediaCaptureStreams />} />
            <Route path="MediaSession/" element={<MediaSession />} />
            <Route path="MediaSourceExtensions/" element={<MediaSourceExtensions />} />
            <Route path="MediaRecording/" element={<MediaRecording />} />
          </Route>
        </Routes>
        {/* <Routes>
          <Route path="/webapi/MediaCapabilities/:id" element={<MediaCaptureStreams />} />
        </Routes> */}
      </Router>
    </div>
  );
}
