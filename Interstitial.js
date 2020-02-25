// @flow

import { NativeModules, requireNativeComponent, NativeEventEmitter } from 'react-native';

const { RNStartAppInterstitial } = NativeModules;

const eventEmitter = new NativeEventEmitter(RNStartAppInterstitial);

const addListener = (type: "onReceiveAd" | "onFailedToReceiveAd", handler: Function) => {
  switch (type) {
    case "onReceiveAd":
      eventEmitter.addListener('onReceiveAd', handler);
      break;
    case "onFailedToReceiveAd":
      eventEmitter.addListener('onFailedToReceiveAd', handler);
      break;
    default:
      break;
  }
}

const removeAllListeners = () => {
  eventEmitter.removeAllListeners('onReceiveAd');
  eventEmitter.removeAllListeners('onFailedToReceiveAd');
};

const load = () => {
  RNStartAppInterstitial.load()
}

const show = () => {
  RNStartAppInterstitial.show()
}

export default {
  load,
  show,
  addListener,
  removeAllListeners,
};