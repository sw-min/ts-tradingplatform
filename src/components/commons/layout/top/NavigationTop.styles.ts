import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;
export const WrapperColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ButtonHome = styled.div`
  font-size: "64px";
`;
export const WrapperRowTop = styled.div`
  width: 100%;
  height: 152px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: white;
`;
export const WrapperRowMiddle = styled.div`
  height: 400px;
`;
export const WrapperRow = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const WrapperRowButtonsTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  width: 210px;
  height: 100px;

  cursor: pointer;
`;
interface IProps {
  isActive: boolean;
}
export const ButtonLogIn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  background: white;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  height: 62px;
  &:hover {
    background: lightgrey;
    transition: 0.3s;
    opacity: 0.4;
  }
`;
export const ButtonSignUp = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;

  background: #ffd600;
  border-radius: 10px;
  border: none;

  height: 62px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: lightgrey;
    transition: 0.3s;
    opacity: 0.4;
  }
`;
