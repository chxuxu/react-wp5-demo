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
export interface IMediaSourceExtensionsProps {
}

export default function MediaSourceExtensions(props: IMediaSourceExtensionsProps) {
  useEffect(()=>{
 
  },[]);
  return (
    <div className="m-MediaSourceExtensions">
      <section>
        <h1>Media Source Extensions API--实验中的功能</h1>
        <p>媒体源扩展 API（MSE）提供了实现无插件且基于 Web 的流媒体的功能。使用 MSE，媒体串流能够通过 JavaScript 创建，并且能通过使用 &lt;audio/&gt; 和 &lt;video/&gt; 元素进行播放。</p>
      </section>
      <section>
        <h2>概念和用法</h2>
        <p>近几年来，我们已经可以在 Web 应用程序上无插件地播放视频和音频了。但是，现有架构过于简单，只能满足一次播放整个曲目的需要，无法实现拆分/合并数个缓冲文件。流媒体直到现在还在使用 Flash 进行服务，以及通过 RTMP 协议进行视频串流的 Flash 媒体服务器。</p>
      </section>
      <section>
        <h2>MSE 标准</h2>
        <p>媒体源扩展（MSE）实现后，情况就不一样了。MSE 使我们可以把通常的单个媒体文件的 src 值替换成引用 MediaSource 对象（一个包含即将播放的媒体文件的准备状态等信息的容器），以及引用多个 SourceBuffer 对象（代表多个组成整个串流的不同媒体块）的元素。MSE 让我们能够根据内容获取的大小和频率，或是内存占用详情（例如什么时候缓存被回收），进行更加精准地控制。 它是基于它可扩展的 API 建立自适应比特率流客户端（例如 DASH 或 HLS 的客户端）的基础。</p>
        <p>在现代浏览器中创造能兼容 MSE 的媒体（assets）非常费时费力，还要消耗大量计算机资源和能源。此外，还须使用外部实用程序将内容转换成合适的格式。虽然浏览器支持兼容 MSE 的各种媒体容器，但采用 H.264 视频编码、AAC 音频编码和 MP4 容器的格式是非常常见的，且一定兼容。MSE 同时还提供了一个 API，用于运行时检测容器和编解码是否受支持。</p>
        <p>如果没有精确的控制时间、媒体质量和内存释放等需求，使用 &lt;video/&gt; 和  &lt;source/&gt; 是一个更加简单但够用的方案。</p>
      </section>
      <section>
        <h2>DASH</h2>
        <p>DASH（Dynamic Adaptive Streaming over HTTP ）是一个规范了自适应内容应当如何被获取的协议。它实际上是建立在 MSE 顶部的一个层，用来构建自适应比特率串流客户端。虽然已经有一个类似的协议了（例如 HTTP 串流直播（HLS）），但 DASH 有最好的跨平台兼容性，这就是我们在这里介绍它的原因。</p>
        <p>DASH 将大量逻辑从网络协议中移出到客户端应用程序逻辑中，使用更简单的 HTTP 协议获取文件。 这样就可以用一个简单的静态文件服务器来支持 DASH，这对 CDN 也很友好。这与之前的流传输解决方案形成鲜明对比，那些流解决方案需要昂贵的许可证来获得非标准的客户端/服务器协议才能实现。</p>
        <p>DASH 的两个最常见的用例涉及“点播”或“直播”观看内容。点播功能让开发者有时间把媒体文件转码出多种不同的分辨率质量。</p>
        <p>实时处理内容会引入由转码和播发带来的延迟。因此 DASH 并不适用于类似 WebRTC 的即时通讯。但它可以支持比 WebRTC 更多的客户端连接。</p>
        <p>有非常多的自由开源的工具，能实现转码内容，并将其改造，以适应 DASH、DASH 文件服务器和用 JavaScript 编写的 DASH 客户端库。</p>
      </section>
    </div>
  );
}
