import { defineManifest } from "@crxjs/vite-plugin";
import { version } from "./package.json";

export default defineManifest(() => {
  return {
    manifest_version: 3,
    name: "__MSG_extName__",
    version,
    default_locale: "en",
    description: "__MSG_extDescription__",
    icons: {
      "16": "icons/icon.png",
      "48": "icons/icon.png",
      "128": "icons/icon.png",
    },
    content_scripts: [
      {
        matches: ["https://twitter.com/*"],
        js: ["./src/content-scripts/main.ts"],
      },
    ],
  };
});
