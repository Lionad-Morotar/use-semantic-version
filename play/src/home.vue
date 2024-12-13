<template>
  <div class="play-container">
    <h1># use-semantic-version</h1>
    <p align="center">
      <img width="555" alt="use-semantic-version" src="https://github.com/Lionad-Morotar/use-semantic-version/blob/release/docs/assets/logo.png?raw=true">
    </p>
    <p class="intro">
      `use-semantic-version`, a simple hook in Vue3 to manage semantic versioning
    </p>
    <div class="box">
      <div class="left">
        <h2>{{ version }}</h2>
        <h3>## version1</h3>
        <ol>
          <li>Major: {{ major }}</li>
          <li>Minor: {{ minor }}</li>
          <li>Patch: {{ patch }}</li>
        </ol>
        <h3>## controls</h3>
        <ol>
          <li><button @click="majoring()">add major</button></li>
          <li><button @click="minoring()">add minor</button></li>
          <li><button @click="patching()">add patch</button></li>
        </ol>
      </div>
      <div class="meter">
        {{  meter }}
      </div>
      <div class="right">
        <h2>{{ version2 }}</h2>
        <h3>## version2</h3>
        <ol>
          <li>Major: {{ major2 }}</li>
          <li>Minor: {{ minor2 }}</li>
          <li>Patch: {{ patch2 }}</li>
        </ol>
        <h3>## controls</h3>
        <ol>
          <li><button @click="majoring2()">add major</button></li>
          <li><button @click="minoring2()">add minor</button></li>
          <li><button @click="patching2()">add patch</button></li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSemanticVersion } from 'use-semantic-version';

const {
  version,
  major, minor, patch,
  majoring, minoring, patching,
  compareTo,
} = useSemanticVersion();

const {
  version: version2,
  major: major2, minor: minor2, patch: patch2,
  majoring: majoring2, minoring: minoring2, patching: patching2,
} = useSemanticVersion('1.0.0');

const meter = computed(() => {
  return compareTo(version2)
  // return compareTo({ major: major2.value, minor: minor2.value, patch: patch2.value })
})

</script>

<style scoped>
.play-container {
  display: flex;
  flex-direction: column;
  padding: 5em;
}
.box {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  place-items: center;
  gap: 1em;
  width: 400px;
  max-width: 100%;
  border: solid 1px #ccc;
  padding: 0.5em;

  .left, .right {
    padding: 0.5em;
    border: solid 1px #ccc;
  }
  .meter {
    width: 1em;
    font-size: 2em;
    padding: 0.25em;
    border: solid 1px #ccc;
    background: #f0f0f0;
  }
}
</style>
