import styled from "styled-components";
import { Link } from "react-router-dom";

export const SLink = styled(Link)`
  text-decoration: none;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.textIndex};
  font-size: ${props => props.fontSize};
  font-weight: bold;
  letter-spacing: -1px;
`;