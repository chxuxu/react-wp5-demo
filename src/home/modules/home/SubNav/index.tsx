import React, { useState } from 'react';
interface ISubNavProps {
  icon?: string
}

export default function SubNav(props: ISubNavProps) {
  const [navs,] = useState([
    { name: "首页", url: "/", key: "home" },
    { name: "二级导航1", url: "/", key: "nav1" },
    { name: "二级导航2", url: "/", key: "nav2" },
    { name: "二级导航3", url: "/", key: "nav3" },
    { name: "二级导航4", url: "/", key: "nav4" }]);
  return (
    <div className="m-HeadNav">
      
    </div>
  );
}
