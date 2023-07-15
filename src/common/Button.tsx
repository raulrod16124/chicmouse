interface IProps {
    disabled?:boolean;
}

export const Button = ({ disabled }:IProps) => {
    
  return (
    <button disabled={disabled} >Ver más</button>
  )
}
