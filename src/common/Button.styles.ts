import styled, { css } from "styled-components";
import { colors, radius, transitions, typography } from "tokens";
import { device } from "utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonStyleProps {
  variant?: ButtonVariant;
  disabled?: boolean;
  fontSize?: number;
  align?: string;
  width?: number;
  height?: number;
  margin?: string;
}

const variantStyles = {
  primary: css`
    background-color: ${colors.accentYellow};
    color: ${colors.lightTextPrimary};
    border: none;
    font-weight: ${typography.fontWeight.semibold};

    &:hover:not(:disabled) {
      background-color: #e6b34d;
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `,
  secondary: css`
    background-color: transparent;
    color: ${colors.textPrimary};
    border: 1px solid ${colors.textSecondary};

    &:hover:not(:disabled) {
      border-color: ${colors.textPrimary};
      color: ${colors.textPrimary};
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${colors.accentBlue};
    border: none;

    &:hover:not(:disabled) {
      color: ${colors.textPrimary};
    }
  `,
};

const baseButtonStyles = css<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize}px` : typography.body.fontSize};
  align-self: ${(props) => props.align ?? "auto"};
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};
  margin: ${(props) => props.margin ?? "0"};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-radius: ${radius.sm};
  padding: 10px 20px;
  transition: transform ${transitions.fast}, background-color ${transitions.fast},
    color ${transitions.fast}, border-color ${transitions.fast},
    opacity ${transitions.fast};

  @media ${device.mobileL} {
    font-size: ${typography.fontSize.sm};
  }
`;

export const CustomButton = styled.button<ButtonStyleProps>`
  ${baseButtonStyles}
  ${(props) => variantStyles[props.variant ?? "secondary"]}
`;

export const ExternalLink = styled.a<ButtonStyleProps>`
  ${baseButtonStyles}
  text-decoration: none;
  ${(props) => variantStyles[props.variant ?? "secondary"]}
`;

