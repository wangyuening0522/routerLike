import { useState, useEffect } from "react";

const useRouter = () => {
  const [location, setLocation] = useState(window.location);

  useEffect(() => {
    const Change = () => {
      // 使用 window.location 对象来获取当前的路由信息。
      setLocation(window.location);
    };

    // 监听路由变化事件，当路由发生变化时执行 Change 函数。
    window.addEventListener("popstate", Change);

    return () => {
      // 卸载组件时移除监听事件。
      window.removeEventListener("popstate", Change);
    };
  }, []);

  // 返回当前的 location 对象，其中包含了 pathname、search 和 hash 等路由信息。
  return location;
};

export default useRouter;
