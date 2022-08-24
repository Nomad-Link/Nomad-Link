import { Div, ProfileImage } from "./EnterpriseProfile.style";

function EnterpriseProfile({ enterpriseName, notices, enterpriseLocation }) {
  return (
    <Div>
      <ProfileImage
        alt=""
        src={require("components/units/enterprises/testimage.jpeg")}
      />
      <p>{enterpriseName}</p>
      {notices.map((n, indexB) => {
        return (
          <div key={indexB}>
            <h3>{n.title}</h3>
            <p>
              {enterpriseLocation} · {n.annual}
            </p>
            <div style={{ display: "flex" }}>
              {n.techStacks.map((t, indexC) => {
                return (
                  <p style={{ fontSize: "12px", margin:"5px" }} key={indexC}>
                    {t.techName}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </Div>
  );
}

export default EnterpriseProfile;
