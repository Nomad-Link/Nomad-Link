import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Div, ProfileImage } from "./EnterpriseProfile.style";

function EnterpriseProfile({
  enterpriseName,
  title,
  techStacks,
  enterpriseLocation,
  annual,
}) {
  const navigate = useNavigate();

  const [limit, setLimit] = useState(25); // eslint-disable-line no-unused-vars
  const toggleEllipsis = (str, limit) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit,
    };
  };

  return (
    <Div onClick={() => navigate(`/${enterpriseName}`)}>
      <ProfileImage
        alt=""
        src={require("components/units/enterprises/testimage.jpeg")}
      />
      <p>{enterpriseName}</p>
      <h3>
        {toggleEllipsis(title, limit).string}
        {toggleEllipsis(title, limit).isShowMore && <span>...</span>}
      </h3>
      {/* <div style={{ display: "flex" }}>
        {techStacks.map((t, indexB) => {
          return (
            <p style={{ fontSize: "12px", margin: "5px" }} key={indexB}>
              {t.techName}
            </p>
          );
        })}
      </div> */}
      <p>
        {enterpriseLocation} · {annual}
      </p>
    </Div>
  );
}

export default EnterpriseProfile;
