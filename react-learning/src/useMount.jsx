import React from "react";
import useMount from "./useMount";

function MyComponent() {
  useMount(() => {
    // 在组件挂载时执行一些操作
    console.log("Component mounted");
  });

  return (
    <></>
    // 组件渲染的代码
  );
}

export default MyComponent;
