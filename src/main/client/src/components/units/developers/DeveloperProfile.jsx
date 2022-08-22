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
} from "./DeveloperProfile.style";

function DeveloperProfile({ unitColor, realName, nation, role, techStacks }) {
  return (
    <Div unitColor={unitColor}>
      <ProfileImage alt="" src={require("components/units/developers/testimage.jpg")} />
      <InformationDiv>
        <TitleBox>
          <Title>
            <Name>{realName}</Name>
            <Nation>{nation}</Nation>
          </Title>
          <MoreButton>자세히 보기</MoreButton>
        </TitleBox>
        <Role>{role}</Role>
        <TechStackBox>
          {techStacks.map((p, indexB) => {
            return (
              <TechName key={indexB}>
                {p.techName.length > 13 ? (
                  <span style={{ fontSize: "12px" }}>{p.techName}</span>
                ) : (
                  <span>{p.techName}</span>
                )}
              </TechName>
            );
          })}
        </TechStackBox>
      </InformationDiv>
    </Div>
  );
}

export default DeveloperProfile;
