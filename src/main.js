import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import App from './App.vue';
import router from './router';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import apexcharts from './plugins/apexcharts';
import { useUIStore } from './stores/uiStore';

// Import icons
import {
  CoHome, MdDashboard, IoCreate, MdAccountcircleRound,FaRegularMoneyBillAlt, IoNotificationsOffOutline,
  IoSettingsOutline, FaBars, PxUsers, IoSettingsSharp, BiPersonWorkspace,
  CoAddressBook, FcManager, MdManagehistoryOutlined, GiSpinningBlades,
  MdArrowupward,MdArrowdownward,IoSearchOutline,FaCheck,BiThreeDotsVertical,GiRoundKnob,
  FaShare,BiWhatsapp,BiFacebook,BiTwitter,FcCancel,BiHeartFill,FaArrowLeft,FaArrowRight,BiEye,
  IoLogoInstagram,FaEyeSlash,HiClipboardList,FaLayerGroup,MdAddtoqueueOutlined,MdCategory,RiSettings5Line,MdMeetingroomOutlined,
  IoLocation,IoSearch,MdConstructionSharp,MdCleaningservicesSharp,FaShoppingBag,RiHotelFill,MdEmojitransportation, BiStarFill,SiDigikeyelectronics,IoLogoTiktok,
  IoLogoWhatsapp,RiLogoutBoxLine,MdLocalhospital,FaMagento,FaEdit,RiDeleteBinLine,LaHireAHelper
} from 'oh-vue-icons/icons';

// Add icons
addIcons(
  CoHome, MdDashboard, IoCreate, MdAccountcircleRound,FaRegularMoneyBillAlt, IoNotificationsOffOutline,
  IoSettingsOutline, FaBars, PxUsers, IoSettingsSharp, BiPersonWorkspace,
  CoAddressBook, FcManager, MdManagehistoryOutlined, GiSpinningBlades,
  MdArrowupward,MdArrowdownward,IoSearchOutline,FaCheck,BiThreeDotsVertical,GiRoundKnob,
  FaShare,BiWhatsapp,BiFacebook,BiTwitter,FcCancel,BiHeartFill,FaArrowLeft,FaArrowRight,BiEye,
  IoLogoInstagram,FaEyeSlash,HiClipboardList,FaLayerGroup,MdAddtoqueueOutlined,MdCategory,RiSettings5Line,MdMeetingroomOutlined,
  IoLocation,IoSearch,MdConstructionSharp,MdCleaningservicesSharp,FaShoppingBag,RiHotelFill,MdEmojitransportation, BiStarFill,SiDigikeyelectronics,IoLogoTiktok,
  IoLogoWhatsapp,RiLogoutBoxLine,MdLocalhospital,FaMagento,FaEdit,RiDeleteBinLine,LaHireAHelper
);

const app = createApp(App);

app.use(apexcharts);

// Register global components
app.component('v-icon', OhVueIcon);

app.provide('$axios', axios);

const pinia = createPinia();
app.use(pinia);
app.use(router);

const uiStore = useUIStore();
uiStore.init(router);

app.mount('#app');
