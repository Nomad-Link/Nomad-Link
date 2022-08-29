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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span>#{techStacks[0].techName}&nbsp;</span>
        <span>#{techStacks[1].techName}&nbsp;</span>
        <span>#{techStacks[2].techName}&nbsp;</span>
      </div>
      <p>
        {enterpriseLocation} · {annual}
      </p>
    </Div>
  );
}

export default EnterpriseProfile;
