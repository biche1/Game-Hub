import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconlist from './PlatformIconlist'

interface Props {
    game: Game
}
const GameCard = ({ game }: Props) => {
  return (
      <Card borderRadius={10} overflow='hidden' width='300px'>
      <Image src={getCroppedImageUrl(game.background_image)} />
          <CardBody>
            <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconlist platforms={game.parent_platforms.map
          (p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'2xl'}>{game.name}<Emoji rating={game.rating_top}/></Heading> 
          </CardBody>
      </Card>
  )
}

export default GameCard