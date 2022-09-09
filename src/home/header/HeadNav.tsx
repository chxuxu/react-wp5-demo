import React, { useState } from 'react';
interface IHeadNavProps {
  icon?: string
}

export default function HeadNav(props: IHeadNavProps) {
  const [navs,] = useState([
    { name: "首页", url: "/", key: "home" },
    { name: "一级导航1", url: "/", key: "nav1" },
    { name: "一级导航2", url: "/", key: "nav2" },
    { name: "一级导航3", url: "/", key: "nav3" },
    { name: "一级导航4", url: "/", key: "nav4" }]);
  return (
    <div className="m-HeadNav">
   
    </div>
  );
}
