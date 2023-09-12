import Image from 'next/image'
import styles from './page.module.css'
import ProfileImage from './Components/ProfileImage'
import Profile from './Components/Profile'
import ButtonSocialMedia from './Components/ButtonSocialMedia'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <main className='centered-content'>
      <ProfileImage />

      <Profile />

      <ButtonSocialMedia
        className=''
        iconName='github'
        text='Github'
      />

      <ButtonSocialMedia
        className='is-error'
        iconName='gmail'
        text='Gmail'
      />

      <ButtonSocialMedia
        className='is-success'
        iconName='medium'
        text='Medium'
      />

      <ButtonSocialMedia
        className='is-primary'
        iconName='linkedin'
        text='Linkedin'
      />

      <Footer />
    </main>
  )
}
