import { useState, useEffect } from "react";
//防抖:在指定时间内的多次触发，只会执行最后一次（多次触发只执行一次）
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timerId;
    // 清除定时器
    function clearTimer() {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
    }
    // 创建新的定时器
    function createTimer() {
      timerId = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
    }

    // 每当 value 发生变化时，清除原来的定时器并创建新的定时器
    clearTimer();
    createTimer();

    return () => {
      // 组件卸载时清除定时器
      clearTimer();
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
