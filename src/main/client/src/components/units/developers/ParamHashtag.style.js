import styled from "styled-components";

export const Section = styled.section`
  width: 950px;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.bgSection};
  border-bottom: 1px solid ${({ theme }) => theme.borderBottom};
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.textSection};
  font-size: 15px;
  margin-top: 10px;
`;
export const TagBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const Tag = styled.button`
  margin: 10px;
  padding: 10px;
  font-size: 18px;
  background-color: #c9c8c8;
  border: 2px solid #c9c8c8;
  border-radius: 15px;

  &:hover {
    background-color: #e7e7e7;
  }
`;
