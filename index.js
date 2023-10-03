const requestIp = require('request-ip');
const geoip = require('geoip-lite');

const ip = (req) => {
    if(!req) return  console.error("@hridoy-ip Error: ip fuction required a 'req' parameter");
  return requestIp.getClientIp(req);
};

const lookup = (ipAddress) => {
    if(!ipAddress) return  console.error("@hridoy-ip Error: lookup fuction required parameter of ip address");
  return geoip.lookup(ipAddress);
};

const get = (req) => {
    if(!req) return  console.error("@hridoy-ip Error: get fuction required a 'req' parameter");
  return {
    'ip': requestIp.getClientIp(req),
    'details': geoip.lookup(requestIp.getClientIp(req))
  };
};

const hridoyIp = {
    ip,
    get,
    lookup
  };

module.exports = hridoyIp; 


