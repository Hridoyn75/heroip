const requestIp = require("request-ip");
const geoip = require("geoip-lite");

const lookup = (ipAddress) => {
  if (!ipAddress) {
    return null; 
  }
  return geoip.lookup(ipAddress);
};



const heroip = (req, res, next) => {
  const clientIp = requestIp.getClientIp(req);
  const ipDetails = geoip.lookup(clientIp);

  if (!ipDetails) {
    // Handle the case where geoip.lookup returns null (no data found)
    req.ipInfo = {
      ip: clientIp,
      details: null,
    };
  } else {
    req.ipInfo = {
      ip: clientIp,
      details: ipDetails,
    };
  }

  next();
};

module.exports = heroip; 
module.exports.lookup = lookup;
