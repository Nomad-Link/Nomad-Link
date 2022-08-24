import styled from "styled-components";

export const Section = styled.section`
  width: 500px;
  vertical-align: middle;
  margin: 0 auto 150px;
  background-color: ${({ theme }) => theme.bgFooter};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
`;
export const InputDiv = styled.div`
  width: 350px;
  text-align: left;
  margin: 20px auto;
`;
export const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-size: 20px;
`;
export const Input = styled.input`
  width: 335px;
  height: 30px;
  background-color: ${({ theme }) => theme.bgUnit};
  margin: 5px 0;
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
export const SendButton = styled.input`
  background-color: #000;
  color: #fff;
  margin: 30px;
  padding: 15px;
  border: 1px solid #000;
  border-radius: 20px;
  font-size: 25px;
  font-weight: bold;
`;