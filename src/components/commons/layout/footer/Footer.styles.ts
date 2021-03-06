import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background: #f2f2f2;
  height: 285px;
  width: 100%;
  z-index: 2;
`;
export const WrapperColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 2;
`;
export const WrapperRowTop = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  color: #828282;

  z-index: 2;
`;
export const WrapperRowMiddle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;

  z-index: 2;
`;
export const WrapperRowBottom = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: #bdbdbd;
  z-index: 2;
`;
export const Logo = styled.img`
  width: 210px;
  height: 32px;
`;
export const Button = styled.button`
  font-size: 18px;
  color: #514400;
  background-color: #ffd600;
  border: none;
  padding-left: 41px;
  padding-right: 41px;
`;
