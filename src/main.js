import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import Router from './router';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.config.productionTip = false;

app.use(Antd);
app.use(Router);

app.mount('#app');
