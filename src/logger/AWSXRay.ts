import AWSXRay from 'aws-xray-sdk';
// import http from 'http';
// import https from 'https';

AWSXRay.config([AWSXRay.plugins.ECSPlugin]);

if (typeof process.env.AWS_XRAY_DAEMON_ADDRESS !== 'undefined') {
  AWSXRay.setDaemonAddress(process.env.AWS_XRAY_DAEMON_ADDRESS);
}

// AWSXRay.captureHTTPsGlobal(http);
// AWSXRay.captureHTTPsGlobal(https);
// AWSXRay.capturePromise();

export default AWSXRay;
