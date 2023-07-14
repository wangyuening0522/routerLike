const ref = (raw) => {
  const r = {
    //一:定义了一个名为 value 的 getter 函数和setter函数
    //1.当访问 value 属性时，会执行该 getter 函数。定义了一个名为 value 的 getter 函数。
    //2.当对 value 属性进行赋值操作时，会执行该 setter 函数。
    get value() {
      //让 Vue 3 知道该引用对象在模板中被使用
      // 1.对象，属性名value
      // 2.收集
      track(r, "value");
      return raw;
    },

    //1.引用对象 ，属性名 'value'
    //2.执行
    set value(newVal) {
      //更新引用对象的值。
      raw = newVal;
      //在更新后，调用了 trigger 函数，用于触发依赖更新
      trigger(r, "value");
    },
  };
  return r;
};
