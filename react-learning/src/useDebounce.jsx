import { useState, useEffect } from 'react';
//防抖:在指定时间内的多次触发，只会执行最后一次（多次触发只执行一次）
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
/* 
每当 value 发生变化时，useEffect 会创建一个定时器，等待 delay 毫秒后触发 setDebouncedValue 来更新 debouncedValue 的值。
如果在 delay 毫秒内 value 重新发生变化，就会清除之前创建的定时器，并重新创建一个新的定时器。
 */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
//最后，useDebounce 钩子返回 debouncedValue，它是经过防抖处理后的值。
  return debouncedValue;
}

export default useDebounce;