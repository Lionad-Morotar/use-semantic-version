<template>
  <div class="play-container">
    <h1># use-semantic-version</h1>
    <p align="center">
      <img width="555" alt="use-semantic-version" src="../../docs/assets/logo.png">
    </p>
    <p class="intro">
      `use-semantic-version`, a simple hook in Vue3 to manage semantic versioning
    </p>
    <h2>## versions</h2>
    <ol>
      <li>Full Version: {{ version }}</li>
      <li>Major: {{ major }}</li>
      <li>Minor: {{ minor }}</li>
      <li>Patch: {{ patch }}</li>
    </ol>
    <h2>## controls</h2>
    <ol>
      <li><button @click="majoring()">add major</button></li>
      <li><button @click="minoring()">add minor</button></li>
      <li><button @click="patching()">add patch</button></li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { useSemanticVersion } from 'use-semantic-version';

const {
  version,
  major, minor, patch,
  majoring, minoring, patching,
} = useSemanticVersion();

</script>

<style scoped>
.play-container {
  display: flex;
  flex-direction: column;
  padding: 5em;
}
</style>
