import { BrowserView, MobileView } from "react-device-detect";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

import { ThemeProvider } from "store/ThemeProvider";
import { GlobalStyle } from "styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <GlobalStyle />
        <BrowserView>
          <Desktop />
        </BrowserView>
        <MobileView>
          <Mobile />
        </MobileView>
      </ThemeProvider>
    </div>
  );
}
export default App;
