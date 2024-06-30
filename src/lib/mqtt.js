const host = "103.167.112.188";
const port = "15675";

const urlMQTT = `ws://${host}:${port}/ws`;

const mqttConfig = {
  username: "/iot:kelas_edp",
  password: "kelas_edp",
  clientId: `RAYYA_22421012-ADELLIA_22421003`,
  protocolId: "MQTT",
};

export { host, port, urlMQTT, mqttConfig};
