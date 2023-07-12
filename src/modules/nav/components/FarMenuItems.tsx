import { useIntl } from "react-intl"

export const FarMenuItems = () => {
  const intl = useIntl();

  return (
    <div>{intl.formatMessage({id:"language"})}</div>
  )
}
