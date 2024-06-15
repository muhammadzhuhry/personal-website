import Image from 'next/image'
import photo from '../../public/avatar.png'
import avatar from '../../public/avatartion.png'

export default function ProfileImage() {
  return (
    <Image
      className='custom-avatar'
      src={avatar}
      alt='muhammad zhuhry profile image'
    />
  )
}
