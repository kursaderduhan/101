import React from 'react'
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Tooltip,
} from '@chakra-ui/react'
import useContract from '@hooks/useContract'
import { useStorken } from '@data/storken'
export const SaveModal = () => {
  const contract = useContract()
  const [metadata, Metadata] = useStorken<any>('metadata')

  const handleChange = (e: any) => {
    const { name, value } = e.target
    Metadata.set(
      (prevInputs: any) =>
        ({
          ...prevInputs,
          [name]: value,
        } as { name: string; description: string }),
    )
  }

  const create = async () => {
    const jsonStr = JSON.stringify(metadata)
    const jsonBytes = Buffer.from(jsonStr, 'utf8')
    const txn = await contract.createNft(jsonBytes)
    await txn.wait()
  }

  const download = () => {
    const canvas = document.getElementById('my-canvas') as HTMLCanvasElement
    const dataURL = canvas.toDataURL()
    const link = document.createElement('a')
    link.download = 'MyNft.png'
    link.href = dataURL
    link.click()
  }
  return (
    <>
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="80%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader>Create your nft</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Your nft name"
              type={'text'}
              value={metadata.name}
              name={'name'}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              placeholder="Your nft description"
              type={'text'}
              value={metadata.description}
              name={'description'}
              onChange={handleChange}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={download}>
            Download Image
          </Button>
          <Tooltip label={metadata.image === "" ? "Please wait ipfs" : undefined} >
          <Button colorScheme="gray" mr={3} onClick={create}>
            Create
          </Button>
          </Tooltip>
        </ModalFooter>
      </ModalContent>
    </>
  )
}

export default SaveModal
