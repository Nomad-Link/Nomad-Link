import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { Button, muiModeIcon } from "./ThemeToggle.style";

function ThemeToggle({ toggle, mode }) {
  return (
    <Button onClick={toggle} mode={mode}>
      {mode === "dark" ? <span>라이트 모드 </span> : <span>다크 모드 </span>}
      {mode === "dark" ? (
        <LightModeIcon className="light" sx={muiModeIcon} />
      ) : (
        <ModeNightIcon className="Night" sx={muiModeIcon} />
      )}
    </Button>
  );
}
export default ThemeToggle;
