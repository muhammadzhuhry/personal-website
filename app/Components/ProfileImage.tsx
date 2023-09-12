import Image from 'next/image'
import photo from '../../public/avatar.png'

export default function ProfileImage() {
  return (
    <Image
      className='custom-avatar'
      src={photo}
      alt='muhammad zhuhry profile image'
    />
  )
}
