import { BrowserView, MobileView } from "react-device-detect";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

function App() {
  return (
    <div className="App">
      <BrowserView>
        <Desktop />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </div>
  );
}
export default App;
