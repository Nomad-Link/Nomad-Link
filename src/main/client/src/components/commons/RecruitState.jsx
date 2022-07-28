import ReceiptIcon from "@mui/icons-material/ReceiptLong";
import ConsultIcon from "@mui/icons-material/Group";
import WriteIcon from "@mui/icons-material/BorderColor";
import RecruitStartIcon from "@mui/icons-material/FindInPage";
import { Section, Box, Circle, Hr, Li, Phase, muiIcon } from "./RecruitState.style";

function RecruitState() {
  return (
    <Section>
      <Box>
        <Circle>1</Circle>
        <Hr />
        <Circle>2</Circle>
        <Hr />
        <Circle>3</Circle>
        <Hr />
        <Circle>4</Circle>
      </Box>
      <Box>
        <Li>
          <ReceiptIcon sx={muiIcon} />
          <Phase>구인 폼 제출</Phase>
        </Li>
        <Li>
          <ConsultIcon sx={muiIcon} />
          <Phase>컨설턴트 상담</Phase>
        </Li>
        <Li>
          <WriteIcon sx={muiIcon} />
          <Phase>계약서 작성</Phase>
        </Li>
        <Li>
          <RecruitStartIcon sx={muiIcon} />
          <Phase>채용 시작</Phase>
        </Li>
      </Box>
    </Section>
  );
}
export default RecruitState;
