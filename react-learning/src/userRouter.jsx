import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useRouter = () => {
  //使用了 useHistory 钩子获取了当前路由的历史记录对象，然后使用 useState 钩子来维护当前的路由状态。
  const history = useHistory();
  const [location, setLocation] = useState(history.location);

  useEffect(() => {
    //对路由的变化进行监听。每当路由发生变化时
    const unlisten = history.listen((location) => {
      //使用 setLocation 函数来更新当前的路由状态。
      setLocation(location);
    });

    return () => {
      unlisten();
    };
  }, [history]);

  return location;
};

export default useRouter;
