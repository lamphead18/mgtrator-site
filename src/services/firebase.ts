import { initializeApp } from "firebase/app";
import {
  getRemoteConfig,
  fetchAndActivate,
  getValue,
} from "firebase/remote-config";

const firebaseConfig = {
  apiKey: "AIzaSyD5xTRxmGBwC7Xlgai_SF-14HcGDt24wLg",
  authDomain: "mg-trator-site.firebaseapp.com",
  projectId: "mg-trator-site",
  storageBucket: "mg-trator-site.appspot.com",
  messagingSenderId: "1047888220683",
  appId: "1:1047888220683:web:c09dede04cc44c85402d0e",
  measurementId: "G-0DW0TPF0BN",
};

const app = initializeApp(firebaseConfig);

const remoteConfig = getRemoteConfig(app);
remoteConfig.settings.minimumFetchIntervalMillis = 500;

const getShowcase = async () => {
  await fetchAndActivate(remoteConfig);
  const showcaseRemoteConfig = getValue(remoteConfig, "vitrine");
  const showcaseJsonString = showcaseRemoteConfig.asString();
  const showcase = JSON.parse(showcaseJsonString);

  return showcase;
};

export { getShowcase };
