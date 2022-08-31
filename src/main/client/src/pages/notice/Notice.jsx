import { Main } from "styles/Pages";
import HelmetAsync from "HelmetAsync";
import Detail from "components/units/enterprises/Detail";
import TitleBackButton from "components/commons/TitleBackButton";

function Private() {

  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"채용 공고 : "} />
      <TitleBackButton title="채용 공고" />
      <Detail />
    </Main>
  );
}

export default Private;
