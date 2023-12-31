
# Introduction

**heroip** is a lightweight Node.js middleware and utility package that simplifies IP address lookup and geolocation based on incoming requests. This package is designed to seamlessly integrate into your Node.js applications to provide essential IP address information effortlessly.
## Installation

Installing **heroip** is straightforward. You can add it to your Node.js project using npm, the package manager for Node.js:

```bash
  npm install heroip
```
    
## Usage / Example

**heroip** simplifies the process of IP address detection and geolocation in your Express.js applications. 

```javascript
import express from "express";
import heroip, { lookup } from "heroip";

const app = express(); // Create an Express app

app.use(heroip); // Use heroip middleware for IP info

app.get("/", (req, res) => {
  const { ipInfo } = req; // Access IP information from the request object
  res.json(ipInfo); // Respond with IP details as JSON
});

const port = process.env.PORT || 3000; // Set the server port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Start the server
});

const ipAddress = "8.8.8.8"; // IP address to look up
const ipDetails = lookup(ipAddress); // Use lookup function to get IP details

console.log(ipDetails); // Log the IP details


```
## Why Use heroip?

The `heroip` package offers several compelling reasons to simplify IP address lookup and geolocation in your Node.js applications:

1. **Ease of Use**: With just a few lines of code, you can effortlessly retrieve detailed information about incoming IP addresses. The `heroip` middleware seamlessly integrates into your Express.js applications, making IP data readily available.

2. **Improved Functionality**: By gaining access to the IP details of incoming requests, you can enhance your application's functionality. This can include personalizing content, enhancing security measures, or building analytics features.

3. **Flexibility**: The package provides both middleware and a standalone `lookup` function, allowing you to choose the approach that best suits your application's needs. Use the middleware to automatically populate IP information in your request objects or manually look up IP details when required.

4. **Underlying Libraries**: `heroip` leverages well-established libraries such as `request-ip` and `geoip-lite` to ensure accuracy and reliability in IP address handling and geolocation.

5. **Open Source**: This package is open-source and available under the MIT License, making it freely accessible and customizable for your projects.

Whether you're building a location-based service, enhancing user experiences, or adding security layers, `heroip` simplifies the process of working with IP addresses, enabling you to focus on your application's core functionality.

Explore the documentation for detailed usage instructions and leverage `heroip` to unlock the potential of IP address data in your Node.js applications.
## Acknowledgments

We would like to express our gratitude to the creators and maintainers of the following packages and resources that have contributed to the functionality and capabilities of **heroip**:

- [request-ip](https://www.npmjs.com/package/request-ip): A package that provides middleware for extracting client IP addresses from Express.js requests.

- [geoip-lite](https://www.npmjs.com/package/geoip-lite): A package for performing lightweight geolocation lookups based on IP addresses.

These packages have been instrumental in making IP address detection and geolocation easy and efficient in **heroip**. We appreciate the hard work and dedication of their respective maintainers.
## Author

**heroip** is developed and maintained by Nazmul Hridoy. 

- GitHub: [github.com/Hridoyn75](https://github.com/Hridoyn75)
- Email: [hridoyn75@gmail.com](mailto:hridoyn75@gmail.com)

Feel free to reach out to the author for questions, feedback, or contributions related to the package. Contributions and suggestions are always welcome and appreciated.
## License

**heroip** is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.

