//1.创建一个状态对象，用来存放应用程序的状态：
const state = {
  count: 0,
};
//2.定义一些用来修改状态的方法，这些方法会接收当前的状态对象作为参数,然后进行修改
const mutation = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
};
//3.创建一个对象来存储各种操作（例如 mutations、actions、getters 等）
const store = {
  state,
  mutation,
};
//4.在应用程序中使用这个 store 对象：
console.log(store.state.count);
store.mutation.increment(store.state);
console.log("加法", store.state.count);
store.mutation.decrement(store.state);
console.log("减法", store.state.count);
