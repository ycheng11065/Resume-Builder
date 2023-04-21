import { Font } from "@react-pdf/renderer";
import QuicksandRegular from "../fonts/Quicksand-Regular.ttf";
import QuicksandBold from "../fonts/Quicksand-Bold.ttf";

Font.register({
  family: "Quicksand",
  fonts: [
    { src: QuicksandRegular },
    { src: QuicksandBold, fontWeight: "bold" },
  ],
});

export default Font;
