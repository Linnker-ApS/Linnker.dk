import localFont from "next/font/local";

const helvetica = localFont({
  src: [
    {
      path: "../../src/fonts/HelveticaNeueUltraLight.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../src/fonts/HelveticaNeueThin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../src/fonts/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../src/fonts/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../src/fonts/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../src/fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../src/fonts/HelveticaNeueHeavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../src/fonts/HelveticaNeueBlack.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

export default helvetica;
