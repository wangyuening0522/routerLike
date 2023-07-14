const reactive = (target) => {
    return new Proxy(
        target, // 被代理的对象
        // handle 处理程序
        {
            //1.get拦截器
            get (target, key, receiver) {
                console.log('Get was called with key = ' + key)
                //使用Reflect.get获取结果值
                const result = Reflect.get(...arguments)
                //track会记录这个属性的访问,记录依赖
                track(target, key)
                //返回结果值
                return result
            },
            //2.set拦截器
            set (target, key, value, receiver) {
                console.log('Set was called with key = ' + key)
                let oldValue = target[key]
                //使用Reflect.set 设置新值
                Reflect.set(...arguments)
                //比较新旧值,如果不相等,调用trigger方法, trigger 更新
                if (oldValue !== value)
                    trigger(target, key)
                    //返回新值
                return value
            }
        })
        
}
//总结：
/* 实现响应式:
当获取数据时,会 track 依赖
当设置数据时,会 trigger 更新,所有依赖都会收到通知,重新获取新数据 */