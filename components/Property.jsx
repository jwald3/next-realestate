import Link from 'next/link'
import Image from 'next/image'
import {Box,Flex,Text,Avatar} from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../assets/images/house.jpg'

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
    <Link href={`/property/${externalID}`} passHref>
        <Flex wrap="wrap" w="420px" p="5" paddingTop="0" justify="flex-start" cursor="pointer">
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} alt="house" width={400} height={260}/>
            </Box>
            <Box w="full">
                <Flex paddingTop="2" align="center" justify="space-between">
                    <Flex align="center">
                        <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
                        <Text fontWeight="bold" fontSize="lg">AED ${millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size="sm" src={agency?.logo?.url} />
                    </Box>
                </Flex>
                <Flex align="center" p="1" justify="space-between" w="250px" color="blue.400">
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area * 10.764)} sqft <BsGridFill />
                </Flex>
                <Text fontSize="lg">
                    {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                </Text>
            </Box>
        </Flex>
    </Link>
);

export default Property