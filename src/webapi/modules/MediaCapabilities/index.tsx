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
export interface IMediaCapabilitiesProps {
}

export default function MediaCapabilities(props: IMediaCapabilitiesProps) {

  let routerParams = useParams();
  let [searchParams,setSearchParams]=useSearchParams();
  let params = searchParams.getAll("key");
  useEffect(()=>{
    console.log(routerParams);
    console.log(params,setSearchParams);
  },[]);
  return (
    <div className="m-IMediaCapabilitiesProps">
      <section>
        <h1>媒体功能检测 API</h1>
        <p>媒体功能 API允许开发人员确定设备的解码和编码能力，公开信息，例如是否支持媒体以及播放是否应该流畅和节能，并提供有关播放的实时反馈以更好地启用自适应流，以及访问显示财产信息。</p>
        <code>
          <h2>检测音频文件支持和预期性能</h2>
          <p>此示例定义了一个音频配置，然后检查用户代理是否支持解码该媒体配置，以及它是否在平滑度和功率效率方面表现良好。</p>
          <button onClick={()=>{
            let contentType="audio/mp3";
            if ('mediaCapabilities' in navigator) {
              let audioFileConfiguration:any = {
                type : 'file',
                audio : {
                    contentType: "audio/mp3",
                    channels: 2,
                    bitrate: 132700,
                    samplerate: 5200
                }
              };
            
              navigator.mediaCapabilities.decodingInfo(audioFileConfiguration).then((result) => {
                console.log(`This configuration is ${result.supported ? '' : 'not '}supported,`);
                console.log(`${result.smooth ? '' : 'not '}smooth, and`);
                console.log(`${result.powerEfficient ? '' : 'not '}power efficient.`);
                })
                .catch(() => {
                  console.log(`decodingInfo error: ${contentType}`)
                });
            }
          }}>检测例子</button>
        </code>
      </section>
      <section>
        <h2>媒体功能 API 概念和用法</h2>
        <p>有无数的视频和音频编解码器。不同的浏览器支持不同的媒体类型，并且一直在开发新的媒体类型。借助 Media Capabilities API，开发人员可以确保每位用户的浏览器、设备和操作系统功能都能获得最佳的比特率和存储节省。</p>
        <p>设备使用硬件解码还是软件解码会影响视频解码的流畅度和节能程度以及播放的效率。媒体功能 API 可以确定支持哪些编解码器以及媒体文件在平滑度和电源效率方面的性能。</p>
        <p>要测试视频或音频文件的支持度、流畅度和电源效率，请使用MediaCapabilities接口encodingInfo()和decodingInfo()方法。</p>
        <p>媒体功能信息使网站能够启用自适应流，以根据实际用户感知质量改变内容质量，并对 CPU/GPU 使用情况做出实时反应。</p>
      </section>
    </div>
  );
}
