import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-monda), sans-serif" },
        body: { value: "var(--font-monda), sans-serif" },
      },
      colors: {
        brand: {
          "100": { value: "#E688AC" },
          "300": { value: "#D73E79" },
          "500": { value: "#B71453" },
          "700": { value: "#8F103F" },
          "900": { value: "#6A0C30" },
        },
        secondary: {
          "100": { value: "#E8DDE0" },
          "300": { value: "#D7C6CA" },
          "500": { value: "#C5ABB2" },
          "700": { value: "#B09098" },
          "900": { value: "#7F5F66" },
        },
        gray: {
          "100": { value: "#F4F4F5" },
          "300": { value: "#E5E5E7" },
          "500": { value: "#55565A" },
          "700": { value: "#2A2A2D" },
          "900": { value: "#0A0A0A" },
        },
        accent: {
          "500": { value: "#0D3B4E" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
