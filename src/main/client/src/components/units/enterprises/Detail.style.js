import styled from "styled-components";

export const Section = styled.section`
  width: 950px;
  display: inline-block;
  background-color: ${({ theme }) => theme.bgForm};
  text-align: center;
  border-radius: 20px;
  margin: 0 auto 20px;
`;
export const BoxFlex = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
  padding-top: 20px;
`;
export const DetailImage = styled.img`
  width: 360px;
  height: 203px;
  border-radius: 15px;
`;
export const Info = styled.div`
  width: 480px;
  height: 181px;
  padding: 10px;
  border-top: 1px solid ${({ theme }) => theme.textOpacity};
  border-bottom: 1px solid ${({ theme }) => theme.textOpacity};
`;
export const TechStackBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  padding-bottom: 20px;
`;
export const TechName = styled.div`
  width: 85px;
  height: 20px;
  text-align: center;
  margin: 3px;
  padding: 3px;
  background-color: ${({ theme }) => theme.bgButton};
  color: ${({ theme }) => theme.textSection};
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
export const EntName = styled.p`
  font-size: 20px;
`;
export const EntTitle = styled.h1`
  margin: 5px 0;
`;
export const EntTextDiv = styled.div`
  text-align: left;

  p {
    margin-bottom: 10px;
  }
`;
export const Strong = styled.strong`
  font-weight: bold;
`;
export const Button = styled.button`
  width: 180px;
  height: 50px;
  margin: 0 20px 20px;
  float: right;
  font-size: 20px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0);
`;
