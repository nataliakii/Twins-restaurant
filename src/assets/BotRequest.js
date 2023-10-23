import axios from "axios";
import { isLocationWithinRadius } from "./functions";

export const sendWaiter = (message, zonti, restCoords, searchRadius, api) => {
  const data = {
    message: message,
  };

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLat = position.coords.latitude;
      const userLon = position.coords.longitude;
      console.log(position);
      const restaurantLat = restCoords.lat;
      const restaurantLon = restCoords.lon;

      // Calculate the distance between the user and the restaurant
      const isWithinRadius = isLocationWithinRadius(
        userLat,
        userLon,
        restaurantLat,
        restaurantLon,
        searchRadius
      );

      if (isWithinRadius) {
        console.log(isWithinRadius);
        // User is within searchRadius of the restaurant
        // Perform the post request
        axios
          .post("https://button.hopto.org/waiter2", data)
          .then(function (response) {
            console.log(`Table ${data.table} called the waiter`, response.data);
          })
          .catch(function (error) {
            console.error("Error sending POST request:", error);
          });
      } else {
        // User is outside the restaurant
        alert("You need to be inside the restaurant to call the waiter.");
      }
    },
    (error) => {
      // Handle geolocation error
      console.error(`GeoLocation Error: ${error.message}`);
    }
  );
};

export const sendBill = (message, zonti, restCoords, searchRadius, api) => {
  const data = {
    message: message,
  };

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLat = position.coords.latitude;
      const userLon = position.coords.longitude;

      const restaurantLat = restCoords.lat;
      const restaurantLon = restCoords.lon;

      // Calculate the distance between the user and the restaurant
      const isWithinRadius = isLocationWithinRadius(
        userLat,
        userLon,
        restaurantLat,
        restaurantLon,
        searchRadius
      );

      if (isWithinRadius) {
        // User is within searchRadius of the restaurant
        // Perform the post request
        axios
          .post("https://button.hopto.org/bill2", data)
          .then(function (response) {
            console.log(message, response.data);
          })
          .catch(function (error) {
            console.error("Error sending Bill:", error);
          });
      } else {
        // User is outside the restaurant
        alert("You need to be inside the restaurant to call the waiter.");
      }
    },
    (error) => {
      // Handle geolocation error
      console.error(`GeoLocation Error: ${error.message}`);
    }
  );
};

export const sendTelegramRequest = (zonti) => {
  const chat_id = "-4074718635";
  const table_id = zonti;
  const timestamp = new Date().toLocaleTimeString();
  console.log(timestamp);

  const data = {
    table_id: table_id,
  };

  axios
    .post("https://button.hopto.org/callwaiter", data)
    .then(function (response) {
      console.log("Message sent to Telegram bot:", response.data);
    })
    .catch(function (error) {
      console.error("Error sending message:", error);
    });
};
export const sendTest = () => {
  axios
    .get("https://button.hopto.org/t")
    .then(function (response) {
      console.log("Test Message sent to Telegram bot:", response.data);
    })
    .catch(function (error) {
      console.error("Error sending test:", error);
    });
};
