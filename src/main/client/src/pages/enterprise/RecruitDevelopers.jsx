import { Main } from "../Page.style";
import DevelopersPopulation from "../../components/units/developers/DevelopersPopulation";
import DevelopersInput from "../../components/units/developers/DevelopersInput";
import DevelopersHashtag from "../../components/units/developers/DevelopersHashtag";
import DevelopersList from "../../components/units/developers/DevelopersList";

function RecruitDevelopers() {
  return (
    <Main>
      <DevelopersPopulation />
      <DevelopersInput />
      <DevelopersHashtag />
      <DevelopersList />
    </Main>
  );
}

export default RecruitDevelopers;
