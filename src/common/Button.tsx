import { ReactNode } from "react";
import { CustomButton, ExternalLink } from "./Button.styles"

interface IProps {
    content: string | ReactNode;
    isExternalLink?:boolean;
    disabled?:boolean;
    color?:string;
    background?:string;
    align?:string;
    externalUrl?:string;
    width?: number;
    height?: number;
    margin?: string;
    fontSize?: number;
    onClick?: () => void;
}

export const Button = ({content, isExternalLink, disabled, externalUrl, ...restOfProps }:IProps) => {
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
      disabled={disabled} 
      {...restOfProps}
    >
      {content}
    </CustomButton>
  )
}
