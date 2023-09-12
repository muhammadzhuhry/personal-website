import Link from "next/link";

export default function ButtonSocialMedia({ className, iconName, text, link } : {className: string, iconName: string, text: string, link: string}) {
  return (
    <Link className={`nes-btn nes-btn-custom margin-15 ${className}`} href={link} target='_blank'>
      <i className={`nes-icon is-small padding-right-30 ${iconName}`}></i>
      <span>{text}</span>
    </Link>
  )
}
