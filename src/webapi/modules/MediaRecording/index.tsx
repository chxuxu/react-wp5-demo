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
export interface IMediaRecordingProps {
}
var recordedChunks = [];
export default function MediaRecording(props: IMediaRecordingProps) {

  useEffect(()=>{
    var canvas = document.querySelector("canvas");

    // Optional frames per second argument.
    var stream = canvas.captureStream(25);
    
    
    console.log(stream);
    var options = { mimeType: "video/webm; codecs=vp9" };
    let mediaRecorder = new MediaRecorder(stream, options);
    
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();
    setTimeout(event => {
      console.log("stopping");
      mediaRecorder.stop();
    }, 9000);
  },[]);

  function handleDataAvailable(event) {
    console.log("data-available");
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
      console.log(recordedChunks);
      download();
    } else {
      // ...
    }
  }

  function download() {
    var blob = new Blob(recordedChunks, {
      type: "video/webm"
    });
    var url = URL.createObjectURL(blob);
    var a:any = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "test.webm";
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="m-MediaRecording">
      <section>
        <h1>MediaStream Recording API</h1>
        <p>MediaStream Recording API 使得捕获通过 MediaStream 或者HTMLMediaElement 对象产生的用于分析、加工或者保存到硬盘的数据成为可能。它也非常容易让人们使用。</p>
      </section>
      <section>
        <h2>基本概念</h2>
        <p>MediaStream Recording API 由一个主接口MediaRecorder组成，这个接口负责的所有工作是从MediaStream获取数据并将其传递给你进行处理。数据通过一系列dataavailable事件传递，这些数据已经成为你创建 MediaRecorder 时所声明的格式。然后，您可以进一步处理数据，或者根据需要将其写入文件。</p>
      </section>
      <section>
        <h2>录制过程概述</h2>
        <ol>
        <li>建立一个 MediaStream或者HTMLMediaElement (以 &lt;audio&gt; 或 &lt;video&gt; 元素的形式) 来充当媒体数据的源。</li>
        <li>创建一个 MediaRecorder 对象，指定源以及任何有需求的的选项 (比如容器的 MIME 类型或它轨道所需的比特率).</li>
        <li>给 dataavailable 事件设置MediaRecorder.ondataavailable 事件处理函数; 会在数据可利用时候调用。</li>
        <li>一旦媒体源播放，你已经准备好录制，使用 MediaRecorder.start() (en-US) 开始录制。</li>
        <li>dataavailable 事件处理函数正如你所愿的在每次数据准备好时调用; 这个事件有一个值为包含媒体数据的Blob 类型的 data 属性。你可以强制 dataavailable 事件发生，因此会给你传递最新的声音以至于可以让你过滤、保存或者做一些其他的事情。</li>
        <li>当源媒体停止播放时候，录制自动结束。</li>
        <li>你可以随时结束录制通过使用 MediaRecorder.stop() (en-US).</li>
        </ol>
      </section>
      <section>
        <p>注意： 单单使用包含已经录制好媒体切片的Blobs 将大可不能单独播放。媒体在重放之前需要重新组装 .</p>
        <p>如果在录制过程中出错，error (en-US) 事件将会传给MediaRecorder. 你可以设置onerror (en-US)去监听 error 事件。</p>
      </section>
      <section>
        <h2>检查 and 控制记录器的状态</h2>
        <p>你也可以使用 MediaRecorder 对象的属性去决定录制过程的状态，用 pause() 和 resume() (en-US) 方法暂停或者继续媒体源的录制。</p>
        <p>如果你需要检查一个特殊的 MIME 类型是否被支持，使用MediaRecorder.isTypeSupported().</p>
      </section>
      <section>
        <h2>检查潜在的输入源</h2>
        <p>
        如果你的目标是记录摄像头或麦克风输入，您可能希望在构建 MediaRecorder 之前检查可用的输入设备。这时，你需要调用 navigator.mediaDevices.enumerateDevices() 来得到可使用的媒体设备。你可以检查此列表，发现潜在的设备，甚至在有需要的时候过滤掉设备。
        </p>
        <p>在这块代码中，enumerateDevices() 被用来检查可利用的设备，找到那些音频输入设备，创建option 元素，之后添加到select元素，代表输入源选择器 .</p>
        <select id="inputdevices"></select><button onClick={()=>{
          navigator.mediaDevices.enumerateDevices()
          .then(function(devices) {
            console.log(devices);
            devices.forEach(function(device:any) {
              let menu = document.getElementById("inputdevices");
              if (device.kind == "audioinput") {
                let item = document.createElement("option");
                item.innerHTML = device.label||device.deviceId||device.kind;
                item.value = device.deviceId||device.kind;
                menu.appendChild(item);
              }
            });
          });
        }}>检查潜在的输入源</button>
      </section>
      <canvas className="canvas"></canvas>
    </div>
  );
}
