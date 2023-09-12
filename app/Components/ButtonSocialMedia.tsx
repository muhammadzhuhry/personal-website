export default function ButtonSocialMedia({ className, iconName, text } : {className: string, iconName: string, text: string}) {
  return (
    <button className={`nes-btn nes-btn-custom margin-15 ${className}`}>
      <i className={`nes-icon is-small padding-right-30 ${iconName}`}></i>
      <span>{text}</span>
    </button>
  )
}
