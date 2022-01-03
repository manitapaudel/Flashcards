import styled from "styled-components";

type ButtonProps = {
  primary?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
};

const StyledButton = styled.button<ButtonProps>`
  background: ${(props) => (props.primary ? "#ffffff" : "")};
  color: ${(props) => (props.primary ? "#000000" : "palevioletred")};
  padding: ${(props) =>
    props.sm
      ? "4px 8px"
      : props.md
      ? "8px 12px"
      : props.lg
      ? "12px 16px"
      : "6px 10px"};
    borderWidth: {(props) => props.outline ? "2px" : "1px"}
    border-radius: "4px"
`;

export default StyledButton;
