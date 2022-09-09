import styled from "styled-components";

export const Section = styled.section`
  width: 950px;
  text-align: center;
  margin: 50px auto;
  background-color: ${({ theme }) => theme.bgForm};
  border-radius: 20px;
`;
export const BoxFlex = styled.div`
  display: flex;
`;
export const BoxBlock = styled.div`
  margin: 10px 55px;
`;
export const BoxSelect = styled.div`
  margin-right: 22px;
`;
export const InputDiv = styled.div`
  text-align: center;
  margin: 10px auto;
`;
export const Title = styled.h2`
  padding: 30px;
`;
export const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-size: 18px;
`;
export const Input = styled.input`
  width: 350px;
  height: 30px;
  background-color: ${({ theme }) => theme.bgUnit};
  margin: auto;
  margin-bottom: 15px;
  padding-left: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid #000;
  border-radius: 10px;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.textSection};
    opacity: 0.5;
  }
`;
export const Select = styled.select`
  width: 150px;
  height: 30px;
  background-color: ${({ theme }) => theme.bgUnit};
  color: ${({ theme }) => theme.textSection};
  padding: 5px;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid #000;
  border-radius: 10px;
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
