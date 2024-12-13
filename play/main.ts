import { createApp } from "vue"

// main
;(async () => {
  const pages = import.meta.glob("./src/**/*.vue");
  const pathname = location.pathname.replace(/^\//, "") || "home";

  const fileRaw = pages[`./src/${pathname}.vue`];
  const fileIndex = pages[`./src/${pathname}/index.vue`];

  if (!fileRaw && !fileIndex) {
    location.pathname = "home";
    return;
  }

  const component = fileRaw
    ? // @ts-ignore
      (await fileRaw())?.default
    : // @ts-ignore
      (await fileIndex())?.default;

  const app = createApp(component);

  app.mount('#play')
})()
