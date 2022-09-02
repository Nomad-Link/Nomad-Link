import { Main } from "styles/Pages";
import HelmetAsync from "hooks/HelmetAsync";
import Check from "components/units/resume/Check";

function Resume() {
    return (
        <Main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HelmetAsync title={"이력서 : "} />
        <Check />
      </Main>
    );
}

export default Resume;