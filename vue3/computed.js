//目标：计算属性-可以自动计算商品折扣价格和总价，并在商品属性发生变化时自动更新它们的值。
//1.在计算属性被访问时自动调用。
const computed = (getter) => {
  let result = ref();
  effect(() => (result.value = getter()));
  return result;
};
//2.定义响应式对象 product
let product = reactive({ price: 10, quantity: 2 });
//3.定义计算属性 salePrice，它的值是商品的折扣价格（价格打 9 折）。
let salePrice = computed(() => {
  return product.price * 0.9;
});
//定义计算属性 total，它的值是商品的总价（折扣价格乘以数量）。
let total = computed(() => {
  return salePrice.value * product.quantity;
});

console.log(total.value, salePrice.value);
//4.修改了商品的数量属性。
product.quantity = 5;
console.log(total.value, salePrice.value);
//修改了商品的价格属性。
product.price = 20;
console.log(total.value, salePrice.value);
