import styled from "styled-components";

export const TechSearch = styled.input`
  width: 350px;
  height: 30px;
  background-color: ${({ theme }) => theme.bgUnit};
  padding-top: 3px;
  padding-left: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.textOpacity};
  border-radius: 4px;
  outline: none;
  transition: all 0.3s;

  ::placeholder {
    color: ${({ theme }) => theme.textSection};
    opacity: 0.5;
  }
  &:focus {
    border-bottom: 2px solid #4641d9;
  }
`

export const TechName = styled.div`
  display: flex;
  width: 120px;
  height: 30px;
  text-align: center;
  justify-content: space-between;
  margin: 3px;
  padding: 5px;
  background-color: ${({ theme }) => theme.bgButton};
  color: ${({ theme }) => theme.textSection};
  font-size: 18px;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
export const DelButton = styled.span`
cursor: pointer;
  width: 10px;
  height: 10px;
  padding: 3px;
  font-size: 12px;
  border-radius: 50%;

  &:hover {
    background-color: #8d8d8d;
  }
`;

export const Error = styled.p`
  color: #ff0000;
  font-weight: bold;
  @keyframes moveError {
    0% {
      transform: translateX(-1%);
    }
    20% {
      transform: translateX(1%);
    }
    40% {
      transform: translateX(-1%);
    }
    60% {
      transform: translateX(1%);
    }
    80% {
      transform: translateX(-1%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: moveError 0.5s ease-in-out;
`;
