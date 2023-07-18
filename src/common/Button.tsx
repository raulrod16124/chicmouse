import { ReactNode } from "react";
import { CustomButton, ExternalLink } from "./Button.styles"

interface IProps {
    content: string | ReactNode;
    isExternalLink?:boolean;
    disabled?:boolean;
    className?:string;
    color?:string;
    background?:string;
    align?:string;
    externalUrl?:string;
    type?:string;
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
  ...restOfProps 
}:IProps) => {
  if(isExternalLink && externalUrl){
    return (
      <ExternalLink
        href={externalUrl}
        target="_blank"
        disabled={disabled} 
        {...restOfProps}
      >
        {content}
      </ExternalLink>
    )
   }
  return (
    <CustomButton
      type={type}
      disabled={disabled} 
      {...restOfProps}
    >
      {content}
    </CustomButton>
  )
}
