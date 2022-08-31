import { useNavigate } from "react-router-dom";
import {
  Div,
  ProfileImage,
  InformationDiv,
  TitleBox,
  Title,
  Name,
  Nation,
  MoreButton,
  Role,
  TechStackBox,
  TechName,
} from "./Profile.style";

function Profile({ unitColor, realName, nation, role, techStacks }) {
  const navigate = useNavigate();

  return (
    <Div unitColor={unitColor}>
      <ProfileImage
        alt=""
        src={require("components/units/developers/testimage.jpg")}
      />
      <InformationDiv>
        <TitleBox>
          <Title>
            <Name>{realName}</Name>
            <Nation>{nation}</Nation>
          </Title>
          <MoreButton onClick={() => navigate(`/${realName}`)}>
            자세히 보기
          </MoreButton>
        </TitleBox>
        <Role>{role}</Role>
        <TechStackBox>
          {techStacks.map((p, indexB) => {
            return (
              <TechName key={indexB}>
                {p.techName.length > 11 ? (
                  <span style={{ fontSize: "9px" }}>{p.techName}</span>
                ) : (
                  <span style={{ fontSize: "12px" }}>{p.techName}</span>
                )}
              </TechName>
            );
          })}
        </TechStackBox>
      </InformationDiv>
    </Div>
  );
}

export default Profile;
