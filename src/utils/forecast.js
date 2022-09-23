const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=P4IsGhyITVfc6wSedne7nA10wS9fbAed&point=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to traffic service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      freeFlowSpeed = body.flowSegmentData.freeFlowSpeed;
      currentSpeed = body.flowSegmentData.currentSpeed;
      callback(
        undefined,
        "free flow speed " +
          freeFlowSpeed +
          ". It is currently " +
          currentSpeed +
          " speed out."
      );
    }
  });
};

module.exports = forecast;
