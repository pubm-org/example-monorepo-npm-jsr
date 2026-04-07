import { defineConfig } from "@pubm/core";

export default defineConfig({
  versioning: "independent",
  packages: [
    { path: "packages/core", registries: ["npm", "jsr"] },
    { path: "packages/utils", registries: ["npm", "jsr"] },
  ],
  branch: "main",
});
