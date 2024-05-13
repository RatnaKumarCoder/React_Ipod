//a typescript module for zingtouch because react can't initiate zingtouch while importing because of create-react-app inbuilt configuration
declare module 'zingtouch' {
    const zingtouch: any;
    export default zingtouch;
  }
  