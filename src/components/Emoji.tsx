import bullsEye from '../assets/bullseye.webp';
import thumbsUp from '../assets/thumbsup.webp';
import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';
interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;

    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: 'meh', boxSize: '35px' },
        4: { src: thumbsUp, alt: 'recommended',  boxSize: '35px'},
        5: { src: bullsEye, alt: 'execptional', boxSize: '35px'},
    }

  return (
      <Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji