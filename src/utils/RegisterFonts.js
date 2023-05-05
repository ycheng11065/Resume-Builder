import { Font } from "@react-pdf/renderer";
import QuicksandRegular from "../asset/fonts/Quicksand-Regular.ttf";
import QuicksandBold from "../asset/fonts/Quicksand-Bold.ttf";
import CMUBold from "../asset/fonts/cmunbx.ttf";
import CMUItalic from "../asset/fonts/cmunti.ttf";
import CMUNorm from "../asset/fonts/cmunorm.ttf";

Font.register({
  family: "CMU",
  fonts: [
    { src: CMUNorm },
    { src: CMUBold, fontWeight: "bold" },
    { src: CMUItalic, fontStyle: "italic" },
  ],
});

Font.register({
  family: "Quicksand",
  fonts: [
    { src: QuicksandRegular },
    { src: QuicksandBold, fontWeight: "bold" },
  ],
});

export default Font;
