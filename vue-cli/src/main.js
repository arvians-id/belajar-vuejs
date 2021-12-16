import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import AlertComponent from "@/components/Alert.vue";

let app = createApp(App);
app.component('alert-component', AlertComponent);

app.use(router).mount("#app")