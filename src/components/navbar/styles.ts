import styled from "styled-components";

export const Container = styled.nav`
  position: relative;
  width: cal(100vw - 20px);
  background: rgba(231, 12, 34, 1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 5;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  color: #E9E9FF;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;