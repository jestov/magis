// tina/config.js
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // Define tu rama de git principal
  clientId: "YOUR_CLIENT_ID", // Reemplaza con tu Client ID de Tina
  token: "YOUR_ACCESS_TOKEN", // Reemplaza con tu Access Token
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "string",
            name: "buttonText",
            label: "Button Text",
          },
        ],
      },
    ],
  },
});
