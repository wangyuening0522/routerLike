//节流：在指定时间内的多次触发，只会执行最开始的那次（多次触发，每隔一段时间执行一次）
import { useState, useEffect, useRef } from 'react';

function useThrottle(callback, delay) {
 //callback 是需要进行节流处理的函数，delay 是节流的延迟时间（以毫秒为单位）。
  const [previousCallTime, setPreviousCallTime] = useState(0);
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  /* 当 callback 被触发时，useEffect 会创建一个 handleThrottle 函数，该函数会判断当前时间和上一次调用 callback 的时间间隔是否超过 delay，
  如果超过就调用 callback 并更新 previousCallTime 的值。 */
  useEffect(() => {
    function handleThrottle(...args) {
      const now = Date.now();
      if (now - previousCallTime >= delay) {
        savedCallback.current(...args);
        setPreviousCallTime(now);
      }
    }
    const throttledCallback = handleThrottle;
    return () => {
      clearTimeout(throttledCallback);
    };
  }, [delay, previousCallTime]);
  //useThrottle 钩子返回 savedCallback.current，它是经过节流处理后的函数。
  return savedCallback.current;
}

export default useThrottle;