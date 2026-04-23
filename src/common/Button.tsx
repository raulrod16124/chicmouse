import {ReactNode} from 'react';
import {ButtonVariant, CustomButton, ExternalLink} from './Button.styles';

interface IButtonProps {
  content: string | ReactNode;
  variant?: ButtonVariant;
  isExternalLink?: boolean;
  disabled?: boolean;
  className?: string;
  align?: string;
  externalUrl?: string;
  type?: 'button' | 'reset' | 'submit';
  width?: number;
  height?: number;
  margin?: string;
  fontSize?: number;
  onClick?: () => void;
}

export const Button = ({
  content,
  isExternalLink,
  disabled,
  externalUrl,
  type,
  variant = 'secondary',
  ...restOfProps
}: IButtonProps) => {
  if (isExternalLink && externalUrl) {
    return (
      <ExternalLink
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        disabled={disabled}
        variant={variant}
        {...restOfProps}>
        {content}
      </ExternalLink>
    );
  }
  return (
    <CustomButton
      type={type}
      disabled={disabled}
      variant={variant}
      {...restOfProps}>
      {content}
    </CustomButton>
  );
};
