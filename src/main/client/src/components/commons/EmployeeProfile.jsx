import { Div, ProfileImage, InformationDiv, Title } from "./EmployeeProfile.style";

function EmployeeProfile({ realName, nation, role, techStacks }) {
  return (
    <Div>
      <ProfileImage alt="" src={require("./testimage.png")} />
      <InformationDiv>
        <Title>
          <h1>{realName}</h1>
          <p>{nation}</p>
          <p>자세히 보기</p>
        </Title>
        <p>{role}</p>
        <div style={{ display: "flex" }}>
          {techStacks.map((p, indexB) => {
            return <p key={indexB}>{p.techName},&nbsp;</p>;
          })}
        </div>
      </InformationDiv>
    </Div>
  );
}

export default EmployeeProfile;
