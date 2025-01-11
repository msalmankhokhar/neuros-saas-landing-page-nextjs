import Image from 'next/image'

export default function BrandIcon({size=16}) {
  return (
    <Image src={'/img/logo-icon.svg'} alt="logo icon" width={size} height={size} />
  )
}
