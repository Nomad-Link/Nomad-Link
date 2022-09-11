import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Div,
  ProfileImage,
  EntName,
  Title,
  TechNameDiv,
} from "./Profile.style";
import EnterpriseSample from "assets/EnterpriseSample.jpeg";

function Profile({
  id,
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
    <Div onClick={() => navigate(`/notice/${id}`)}>
      <ProfileImage alt="" src={EnterpriseSample} />
      <EntName>{enterpriseName}</EntName>
      <Title>
        {toggleEllipsis(title, limit).string}
        {toggleEllipsis(title, limit).isShowMore && <span>...</span>}
      </Title>
      <TechNameDiv>
        <span>#{techStacks[0].techName}&nbsp;</span>
        <span>#{techStacks[1].techName}&nbsp;</span>
        <span>#{techStacks[2].techName}&nbsp;</span>
      </TechNameDiv>
      <p>
        {enterpriseLocation} · {annual}
      </p>
    </Div>
  );
}

export default Profile;
