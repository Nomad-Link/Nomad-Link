import styled from "styled-components";

export const Div = styled.div`
  // tooltip arrow
  .__react_component_tooltip.place-left::after {
    border-left: 8px solid ${({ theme }) => theme.bgForm} !important;
  }

  .__react_component_tooltip.place-right::after {
    border-right: 8px solid ${({ theme }) => theme.bgForm} !important;
  }

  .__react_component_tooltip.place-top::after {
    border-top: 8px solid ${({ theme }) => theme.bgForm} !important;
  }

  .__react_component_tooltip.place-bottom::after {
    border-bottom: 8px solid ${({ theme }) => theme.bgForm} !important;
  }
  // tooltip bg
  .__react_component_tooltip.show {
    background-color: ${({ theme }) => theme.bgForm};
    color: ${({ theme }) => theme.textIndex};
    opacity: 1;
  }
`;
export const Box = styled.div`
  display: flex;
  padding-left: 10px;
  margin-right: 5px;
  border-radius: 15px;
  transition: all 0.2s;
  z-index: 2000;

  .react-caret-icon {
    font-size: 30px;
    width: 30px;
    height: 30px;
  }

  &:hover {
    color: white;
    background-color: #252528;
  }
`;
export const SpanId = styled.span`
  margin-top: 5px;
`;
export const Tb = styled.button`
  border: none;
  margin: 5px;
  font-size: 15px;
  background-color: ${({ theme }) => theme.bgButton};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 10px;

  &:hover {
    color: white;
    background-color: #252528;
  }
`;
