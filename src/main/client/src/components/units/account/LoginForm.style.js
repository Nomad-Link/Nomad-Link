import styled from "styled-components";

export const Section = styled.section`
  width: 500px;
  height: 400px;
  vertical-align: middle;
  margin: 0 auto 150px;
  background-color: ${({ theme }) => theme.bgFooter};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
`;
export const Input = styled.input`
  width: 350px;
  height: 30px;
  background-color: ${({ theme }) => theme.bgUnit};
  margin: 20px 20px 7px;
  padding-left: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  border: 1px solid #000;
  border-radius: 10px;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.textSection};
    opacity: 0.7;
  }
`;
export const SendDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  width: 150px;
  height: 60px;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 15px;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
`;
export const Error = styled.p`
  color: #ff0000;
  text-align: center;
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