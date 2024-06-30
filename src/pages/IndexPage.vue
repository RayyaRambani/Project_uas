<template>
  <q-page class="flex flex-center" >
    <div style="width:500px">
      <q-input
        v-model="saya"
        filled
        type="textarea"
        rows="20"
        label="Pesan String"
        readonly

      />
      <q-input
        v-model="sensorValueString"
        filled
        type="textarea"
        rows="2"
        label="Nilai Sensor IR"
        readonly
      />
    </div>
  </q-page>

</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import mqtt from 'mqtt'
import {mqttConfig, urlMQTT} from 'src/lib/mqtt'

export default defineComponent({
  name: 'IndexPage',

  setup() {
    const saya = ref('')
    const sensorValue = ref(0)
    const sensorValueString = ref('')
    const client = mqtt.connect(urlMQTT, mqttConfig)
    onMounted(() => {
      client.on('connect', () =>{
        // console.log("Koneksi ke rabbitmq berhasil")

        saya.value='Berhasil  Terhubung ke rabbitmq\n'
      })
      client.subscribe("routing_uasRayyaAdelia", (err) =>{
        if (!err) { }
      })

      client.on('message', (topic, payload) =>{
        const message = payload.toString();
        console.log('hello dunia', topic, message);

        const match = message.match(/\d+/);
        const value = match ? parseInt(match[0], 10) : 0;
        sensorValue.value = isNaN(value) ? 0 : value;
        sensorValueString.value = sensorValue.value.toString();
        saya.value +=`${message}\n`;

        // saya.value += `${payload.toString()}\n`

      })

    });

    return {
      saya,
      sensorValueString
    }
  }
})
</script>
