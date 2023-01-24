import React from 'react'
import {
  Input,
  VStack,
  IconButton,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  SliderMark,
  useDisclosure,
  Modal,
  HStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { BiEraser, BiPencil } from 'react-icons/bi'
import { BsBrush, BsCheck2All } from 'react-icons/bs'
import { useStorken } from '@data/storken'
import SaveModal from './SaveModal'
import useConnection from '@hooks/useConnection'
import useContract from '@hooks/useContract'
export const Menu = ({ handleClick, clearCanvas }: any) => {
  const [isDrawing, IsDrawing] = useStorken<boolean>('isDrawing')
  const [lineWidth, LineWidth] = useStorken<number>('lineWidth')
  const [lineColor, LineColor] = useStorken<string>('lineColor')
  const [lineOpacity, LineOpacity] = useStorken<number>('lineOpacity')
  const [itemControl, ItemControl] = useStorken<number>('itemControl')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const contract = useContract()
  const allBuyItem = async () => {
    const txn = await contract.allBuyItem()
    await txn.wait()
  }
  const change = (props: any) => {
    ItemControl.set(props)
    buyItem()
  }
  const buyItem = async () => {
    const txn = await contract.buyItem(itemControl)
    await txn.wait()
  }
  const handleChange = () => {
    handleClick()
    onOpen()
  }
  return (
    <VStack
      width="150px"
      height="100%"
      justifyContent="space-evenly"
      borderRadius="5px"
      alignItems="center"
      bg={useColorModeValue('light.100', 'dark.600')}
      m="auto"
      gap={2}
    >
      <HStack>
        <IconButton
          as={BiPencil}
          variant={'tools'}
          aria-label={'pencil'}
          onClick={() => change(0)}
        />
        <IconButton
          as={BiEraser}
          variant={'tools'}
          aria-label={'eraser'}
          onClick={() => change(1)}
        />
        <IconButton
          as={BsBrush}
          variant={'tools'}
          aria-label={'brush'}
          onClick={() => change(2)}
        />
      </HStack>
      <IconButton
        as={BsCheck2All}
        variant={'tools'}
        aria-label={'pencil'}
        onClick={allBuyItem}
      />
      <Text>Color</Text>
      <Input
        type="color"
        onChange={(e) => {
          LineColor.set(e.target.value)
        }}
      />
      <Text>Width</Text>
      <Slider
        defaultValue={5}
        min={3}
        max={20}
        step={3}
        onChange={(val) => {
          LineWidth.set(val)
        }}
      >
        <SliderMark
          value={lineWidth}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        />
        <SliderTrack bg="red.100">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
      <Text>Opacity</Text>
      <Slider
        defaultValue={5}
        min={1}
        max={100}
        step={10}
        onChange={(val) => {
          LineOpacity.set(val / 100)
        }}
      >
        <SliderMark
          value={lineOpacity}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        />
        <SliderTrack bg="red.100">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
      <Button
        variant={'styleButton'}
        bg={'rgb(0,204,255)'}
        onClick={clearCanvas}
      >
        Clear
      </Button>
      <Button variant={'styleButton'} bg={'red'} onClick={handleChange}>
        Save
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <SaveModal />
      </Modal>
    </VStack>
  )
}

export default Menu
