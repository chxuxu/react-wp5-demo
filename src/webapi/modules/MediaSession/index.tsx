import React,{useEffect,useRef} from 'react';
import {
  Routes,
  Route,
  Outlet,
  Link,
  useSearchParams,
  useParams,
} from "react-router-dom";
import "./index.less";
export interface IMediaSessionProps {
}

export default function MediaSession(props: IMediaSessionProps) {

  const btnRef=useRef(null);
  useEffect(()=>{
    btnRef.current.addEventListener('pointerup', (event) => {
      const audio = document.querySelector('audio');
    
      // User interacted with the page. Let's play audio!
      audio.play()
      .then(() => { /* Set up media session controls, as shown above. */ })
      .catch((error) => { console.error(error) });
    });
  },[]);
  return (
    <div className="m-MediaSession">
      <section>
        <h1>媒体会话 API</h1>
        <p>提供了一种自定义媒体通知的方法。通过提供元数据以供用户代理显示您的 Web 应用程序正在播放的媒体来实现这一点。</p>
        <p>提供操作处理程序，浏览器可以使用这些处理程序来访问平台媒体键，例如键盘、耳机、遥控器上的硬件键，以及通知区域和移动设备锁定屏幕上的软件键。</p>
        <p>目的是让用户知道正在播放什么并对其进行控制，而无需打开启动它的特定页面。为了能够支持媒体会话 API，浏览器首先需要一种机制来访问和控制操作系统级别的媒体控件（例如 Firefox 的MediaControl）</p>
      </section>
      <section>
        <h2>媒体会话概念和用法</h2>
        <p>MediaMetadata界面允许网站为正在播放的媒体向平台 UI 提供丰富的元数据。此元数据包括标题、艺术家（创作者）姓名、专辑（收藏）和艺术品。该平台可以在媒体中心、通知、设备锁屏等中显示此元数据。</p>
        <p>MediaSession界面允许用户通过用户代理定义的界面元素控制媒体的播放。与这些元素的交互会触发网页中的操作处理程序，播放媒体。由于多个页面可能同时使用此 API，用户代理负责调用正确页面的操作处理程序。当没有页面定义的行为可用时，用户代理提供默认行为。</p>
      </section>
      <section>
        <h2>访问媒体会话 API</h2>
        <p>无需创建自己的MediaSession实例，而是使用该navigator.mediaSession属性访问 API</p>
        <code>
          <p>//将媒体会话的当前状态设置为playing</p>
          <p>navigator.mediaSession.playbackState = "playing";</p>
        </code>
      </section>
      <section>
        <h2>接口</h2>
        <h3>MediaMetadata</h3>
        <p>允许网页提供富媒体元数据以在平台 UI 中显示。</p>
        <code>
        navigator.mediaSession.metadata = new MediaMetadata({});
        </code>
        <h3>MediaSession</h3>
        <p>允许网页为标准媒体播放交互提供自定义行为。</p>
        <code>navigator.mediaSession.playbackState = "playing";</code>
      </section>
      <section>
        <h2>字典</h2>
        <h3>MediaImage</h3>
        <p>包含描述与媒体相关联的图像的信息。这可能是 CD 或 DVD 封面、电影海报、海报框架等。</p>
      </section>
      <div>
        <audio></audio>
      </div>
      <footer>
        <button ref={btnRef} onClick={()=>{
          if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
              title: 'Unforgettable',
              artist: 'Nat King Cole',
              album: 'The Ultimate Collection (Remastered)',
              artwork: [
                { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
                { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
                { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
                { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
                { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
                { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
              ]
            });
          
            navigator.mediaSession.setActionHandler('play', () => { /* Code excerpted. */ });
            navigator.mediaSession.setActionHandler('pause', () => { /* Code excerpted. */ });
            navigator.mediaSession.setActionHandler('stop', () => { /* Code excerpted. */ });
            navigator.mediaSession.setActionHandler('seekbackward', () => { /* Code excerpted. */ });
            navigator.mediaSession.setActionHandler('seekforward', () => { /* Code excerpted. */ });
            navigator.mediaSession.setActionHandler('seekto', () => { /* Code excerpted. */ });
            navigator.mediaSession.setActionHandler('previoustrack', () => { /* Code excerpted. */ });
            navigator.mediaSession.setActionHandler('nexttrack', () => { /* Code excerpted. */ });
            navigator.mediaSession.setActionHandler('skipad', () => { /* Code excerpted. */ });
          }
        }}>示例代码</button>
      </footer>
    </div>
  );
}
