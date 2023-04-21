import { Font } from "@react-pdf/renderer";
import QuicksandRegular from "../fonts/Quicksand-Regular.ttf";
import QuicksandBold from "../fonts/Quicksand-Bold.ttf";
import CMUBold from "../fonts/cmunbx.ttf";
import CMUItalic from "../fonts/cmunti.ttf";
import CMUNorm from "../fonts/cmunorm.ttf";

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
