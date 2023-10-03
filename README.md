
# Introduction

**hridoy-ip** is a lightweight Node.js utility designed to simplify the process of IP address detection and geolocation within your applications. It seamlessly integrates the capabilities of two widely-used packages, `request-ip` and `geoip-lite`, to provide a straightforward solution for obtaining both IP addresses and geolocation details.
## Installation

Installing **hridoy-ip** is straightforward. You can add it to your Node.js project using npm, the package manager for Node.js:

```bash
  npm install hridoy-ip
```
    
## Usage

**hridoy-ip** simplifies the process of IP address detection and geolocation in your Express.js applications. It offers three main functions: `ip`, `lookup`, and `get`. Below, you'll find explanations and examples for each of these functions.

```javascript
const hridoyIp = require('hridoy-ip');
const express = require('express');
const app = express();

// Route to extract and respond with the client's IP address
app.get('/', (req, res) => {
  const ipAddress = hridoyIp.ip(req);
  res.json({ 'ipAddress': ipAddress });
});

// Geolocation lookup for a specific IP address (replace with desired IP)
const ipAddress = '8.8.8.8'; 
const details = hridoyIp.lookup(ipAddress);

console.log('Geolocation Details:', details);

// Route to retrieve both IP address and geolocation details
app.get('/all', (req, res) => {
  const result = hridoyIp.get(req);
  res.json(result);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```
## API Documentation

**hridoy-ip** offers a simple and intuitive API for IP address detection and geolocation in your Node.js applications. This section provides detailed documentation for each of the package's functions.

### 1. `ip(req)`

The `ip` function extracts the client's IP address from the Express.js request object (`req`).

#### Parameters:

- `req` (Request Object): The Express.js request object.

#### Returns:

- `String`: The client's IP address.


### 2. `lookup(ipAddress)`

The `lookup` function performs geolocation lookup for a given IP address and returns geolocation details.

#### Parameters:

- `ipAddress` (String): The IP address you want to look up.

#### Returns:

- `Object`: An object containing geolocation details, including latitude, longitude, city, region, country, and more.

### 3. `get(req)`

The `get` function combines IP address detection and geolocation lookup, providing an object with both the IP address and geolocation details.

#### Parameters:

- `req` (Request Object): The Express.js request object.

#### Returns

The `get` function returns an object with two properties:

- `ip` (String): The client's IP address.
- `details` (Object): Geolocation details as returned by the `lookup` function.
## Why Use hridoy-ip?

- **Effortless IP Detection**: Retrieve the client's IP address with ease using the `ip` function. No need to write complex code to extract this fundamental piece of information.

- **Geolocation Made Simple**: With the `lookup` function, effortlessly gather geolocation details for an IP address. No need to navigate complex APIs or databases; hridoy-ip handles it for you.

- **Convenience**: The `get` function combines IP address detection and geolocation lookup, offering a convenient way to obtain both pieces of information in a single call.

- **Node.js Compatibility**: Designed specifically for Node.js, hridoy-ip seamlessly integrates into your Node.js applications.
## Acknowledgments

We would like to express our gratitude to the creators and maintainers of the following packages and resources that have contributed to the functionality and capabilities of **hridoy-ip**:

- [request-ip](https://www.npmjs.com/package/request-ip): A package that provides middleware for extracting client IP addresses from Express.js requests.

- [geoip-lite](https://www.npmjs.com/package/geoip-lite): A package for performing lightweight geolocation lookups based on IP addresses.

These packages have been instrumental in making IP address detection and geolocation easy and efficient in **hridoy-ip**. We appreciate the hard work and dedication of their respective maintainers.
## Author

**hridoy-ip** is developed and maintained by Nazmul Hridoy. 

- GitHub: [github.com/Hridoyn75](https://github.com/Hridoyn75)
- Email: [hridoyn75@gmail.com](mailto:hridoyn75@gmail.com)

Feel free to reach out to the author for questions, feedback, or contributions related to the package. Contributions and suggestions are always welcome and appreciated.
## License

**hridoy-ip** is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.

