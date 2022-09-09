import React,{useEffect} from 'react';
import {
  Routes,
  Route,
  Outlet,
  Link,
  useSearchParams,
  useParams,
} from "react-router-dom";
import "./index.less";
export interface IMediaStreamProps {
}

export default function MediaCaptureStreams(props: IMediaStreamProps) {

  let routerParams = useParams();
  let [searchParams,setSearchParams]=useSearchParams();
  let params = searchParams.getAll("key");
  useEffect(()=>{
    console.log(routerParams);
    console.log(params,setSearchParams);
  },[]);
  return (
    <div className="m-MediaStream">
      <section>
        <h1>MediaStream API--实验中的功能</h1>
        <p>媒体流处理 API（通常被称为媒体流 API 或流 API）是描述音频或视频数据流的 WebRTC (en-US) 的一部分，处理它们的方法，与数据类型相关的约束，成功和错误 当异步使用数据时的回调以及在处理期间触发的事件。</p>
      </section>
      <section>
        <h2>基本概念</h2>
        <p>这个 API 是基于操纵一个 MediaStream 对象代表音频或视频相关数据的流量。 通常一个 MediaStream 是作为一个简单的 URL string 它可以用来引用存储在 DOM 中的数据 File, 或者一个 Blob 对象建立 window.URL.createObjectURL() (en-US), 如视频所描述的。</p>
        <p>一个 MediaStream 包含零个或更多的 MediaStreamTrack 对象，代表着各种的声轨和视频轨。 每一个 MediaStreamTrack 可能有一个或更多的通道。这个通道代表着媒体流的最小单元，比如一个音频信号对应着一个对应的扬声器，像是在立体声音轨中的左通道或右通道。</p>
        <p>MediaStream 对象有着单一的输入和输出。由 getUserMedia() 创建的 MediaStream 对象是在本地借助用户相机和麦克风的源输入。非本地的 MediaStream 代表了一个媒体元素，像是&lt;video/&gt; 元素或是 &lt;audio/&gt;元素， 一般是源自网络的流，并通过 WebRTC PeerConnection API 或使用 Web Audio API 获得MediaStreamAudioSourceNode 元素。MediaStream 对象的输出能链接到一个用户。 它可以是一个媒体元素，像是 &lt;audio&gt; 或者 &lt;video&gt;， the WebRTC PeerConnection API 或是 Web Audio API MediaStreamAudioDestinationNode (en-US)。</p>
      </section>
    </div>
  );
}
