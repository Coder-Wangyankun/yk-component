import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import globalComponents from "./packages";

const app = createApp(App);
// 全局注册组件
Object.keys(globalComponents).forEach((key) => {
  // @ts-ignore
  app.component(key, globalComponents[key]);
});

app.use(store).use(router).use(ElementPlus).mount("#app");
