import requestIp from "request-ip";
import geoip from "geoip-lite";

export const lookup = (ipAddress) => {
  if (!ipAddress)
    return console.error(
      "@hridoy-ip Error: lookup fuction required parameter of ip address"
    );
  return geoip.lookup(ipAddress);
};

const hridoyIp = (req, res, next) => {
  req.ipInfo = {
    ip: requestIp.getClientIp(req),
    details: geoip.lookup(requestIp.getClientIp(req)),
  };
  next();
};

export default hridoyIp;
