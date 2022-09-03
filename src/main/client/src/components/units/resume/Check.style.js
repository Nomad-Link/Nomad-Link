import styled from "styled-components";

export const Section = styled.section`
  width: 950px;
  text-align: center;
  margin: 20px auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.bgForm};
  border-radius: 20px;
`;
export const BoxFlex = styled.div`
  display: flex;
`;
export const Table = styled.table`
  width: 400px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.bgTable};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.textOpacity};
`;
export const Tr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.textOpacity};
  color: ${({ theme }) => theme.textSection};
`;
export const Head = styled.td`
  width: 130px;
  padding: 10px;
  border-right: 1px solid ${({ theme }) => theme.textOpacity};
`;
export const Text = styled.td`
  width: 270px;
  padding: 10px;
`;
export const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 30px;
  margin-left: 20px;
  float: left;
`;
export const UpdateButton = styled.button`
  width: 150px;
  height: 40px;
  text-align: center;
  float: right;
  margin: 5px;
  padding: 5px;
  background-color: ${({ theme }) => theme.bgButton};
  color: ${({ theme }) => theme.textSection};
  font-size: 20px;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px;

  &:hover {
    background-color: ${({ theme }) => theme.bgUnit};
  }
`;