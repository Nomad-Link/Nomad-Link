import styled from "styled-components";

export const Div = styled.div`
  width: 310px;
  height: 260px;
  text-align: center;
  margin: 0 auto 20px;
  background-color: ${({ theme }) => theme.bgProfile};
  border: 1px solid ${({ theme }) => theme.textOpacity};
`;
export const ProfileImage = styled.img`
  width: 310px;
  height: 174px;
  margin-bottom: 3px;
`;
export const EntName = styled.p`
  font-weight: bold;
`;
export const Title = styled.h3`
  margin: 3px 0;
`;
export const TechNameDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 3px 0;
`;
