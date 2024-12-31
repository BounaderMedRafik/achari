import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Achari",
    short_name: "Achari",
    description:
      "Your AI-powered Arabic poetry tutor. Achari helps you understand, appreciate, and even write your own poems",
    start_url: "/",
    display: "standalone",
    background_color: "#BDBDBD",
    theme_color: "#693113",
    icons: [
      {
        src: "/192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
