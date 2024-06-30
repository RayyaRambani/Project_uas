<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
    <q-header elevated class="header">
      <q-toolbar class="toolbar">
        <q-toolbar-title class="title">
          UAS PROJECT
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>

<style scoped>
.main-layout {
  background-color: gainsboro; /* Black background */

}

.header {
  background-color: #1f1f1f; /* Darker black for header */
  color: gray;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

/* .toolbar {
  background-color: #1f1f1f;
  color: #ffffff;
} */
/*
.title {
  color: #ffffff;
} */

/* .page-container {
  background-color: #121212;
  color: #ffffff;
} */

/* .q-input, .q-btn {
  background-color: #1f1f1f;
  color: #ffffff;
  border: 1px solid #ffffff;
} */

/* .q-btn {
  background-color: #1f1f1f;
  border-color: #ffffff;
} */

/* .q-input__inner {
  background-color: #1f1f1f;
  color: #ffffff;
} */

/* .q-input__bottom {
  border-color: #ffffff;
}

.q-btn__content {
  color: #ffffff;
} */

/* .q-form {
  background-color: #ffffff;
  color: #ffffff;
} */

/* .q-form input {
  background-color: #1f1f1f;
  color: #ffffff;
} */

/* .q-form label {
  color: #ffffff;
} */
</style>
