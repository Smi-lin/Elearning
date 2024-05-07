import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/arbitrum");
  };

  const doubleClick = () => {
    navigate("/lisk");
  };

  return (
    <Box className="discover">
      <Grid
        className="discover-container"
        templateColumns="repeat(2, 1fr)"
        gap="4rem"
        lineHeight="2.5"
        padding="5rem 15rem"
      >
        <GridItem
          className="supreme-container"
          marginTop="20px"
          bgColor="#f4f4f9"
          height="60vh"
          width="30vw"
          letterSpacing="1px"
          padding="1.5rem 2rem"
          alignItems="center"
          borderRadius="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Heading
            as="h2"
            fontSize="2.7rem"
            marginTop="5px"
            textAlign="center"
            marginBottom="2rem"
          >
            Arbitrum
          </Heading>
          <Text>
            Arbitrum is a layer 2 solution designed to improve the capabilities
            of Ethereum smart contracts — boosting their speed and scalability,
            while adding in additional privacy features to boot. The platform is
            designed to allow developers to easily run unmodified Ethereum
            Virtual Machine (EVM) contracts and Ethereum transactions on a
            second layer, while still benefiting from Ethereum's excellent layer
            1 security.
            
          </Text>
          <Button
            className="more"
            onClick={handleClick}
            marginLeft="10rem"
            marginTop="3rem"
          >
            Learn more
          </Button>
        </GridItem>

        <GridItem
          className="supreme-container"
          marginTop="20px"
          bgColor="#f4f4f9"
          height="60vh"
          width="30vw"
          letterSpacing="1px"
          padding="1.5rem 2rem"
          alignItems="center"
          borderRadius="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Heading
            as="h2"
            fontSize="2.7rem"
            marginTop="5px"
            textAlign="center"
            marginBottom="2rem"
          >
            Lisk
          </Heading>
          <Text>
            Lisk is an open-source web3 application platform that is designed
            for interoperability with sidechains. It's Javascript SDK gives
            developers a straightforward path into launching their own Lisk
            compatible blockchains. The native cryptocurrency for the Lisk
            blockchain is the LSK token and it's network achieves consensus
            using Delegated Proof of Stake. including Lisk Core, Lisk Service.
          </Text>
          <Button
            className="more"
            onClick={doubleClick}
            marginLeft="10rem"
            marginTop="3rem"
          >
            Learn more
          </Button>
        </GridItem>

        <GridItem
          className="supreme-container"
          marginTop="20px"
          bgColor="#f4f4f9"
          height="60vh"
          width="30vw"
          letterSpacing="1px"
          padding="1.5rem 2rem"
          alignItems="center"
          borderRadius="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Heading
            as="h2"
            fontSize="2.5rem"
            marginTop="5px"
            textAlign="center"
            marginBottom="2rem"
          >
            Celo
          </Heading>
          <Text>
            Celo is a payments platform attempting to make crypto payments as
            easy as possible to support communities around the world who are
            still left without critical financial services. Instead of having to
            manage complex crypto addresses, users can send cryptocurrencies
            using mobile phone numbers. CELO is a proof-of-stake (PoS) token
            used for transaction fees, governance participation and related
            activities on the Celo network.
          </Text>
          <Button className="more" onClick={handleClick}  marginLeft="10rem"
            marginTop="2rem">
            Learn more
          </Button>
        </GridItem>

        <GridItem
          className="supreme-container"
          marginTop="20px"
          bgColor="#f4f4f9"
          height="60vh"
          width="30vw"
          letterSpacing="1px"
          padding="1.5rem 2rem"
          alignItems="center"
          borderRadius="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Heading as="h2" fontSize="2.5rem" marginTop="5px" textAlign="center"
            marginBottom="2rem">
            DLT Africa
          </Heading>
          <Text>
          DLT Africa is there to give you a comprehensive guide on setting up your own coding environment. Whether you're a beginner or seasoned developer, having the right tools and environment is crucial for success.DLT Africa aims to support web3 innovation across Africa by training more web3 devs, product managers, marketing professionals and support through Hackathons, incubation programs and open demo days.
          </Text>
          <Button className="more" onClick={handleClick} marginLeft="12rem">
            Learn more
          </Button>
        </GridItem>
        {/* Repeat the same pattern for other containers */}
      </Grid>

      <Heading
        className="bill-heading"
        fontSize="3rem"
        fontWeight="500"
        marginBottom="8rem"
        textAlign="center"
        fontFamily="'League Spartan', sans-serif"
      >
        Quick Bill
      </Heading>
      <Text
        className="bill-para"
        marginLeft="14rem"
        fontSize="2.5rem"
        padding="1rem 2rem"
        height="8vh"
        width="65%"
        bgColor="#eef1ef"
        borderRadius="10px"
      >
        Quick Bill is Used for What ?
      </Text>

      <Flex
        className="bill-contain"
        marginLeft="15rem"
        gridTemplateColumns="repeat(2, 1fr)"
        gap="4rem"
        lineHeight="2.5"
        padding="5rem 10rem"
      >
        <Box
          className="quick"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          bgColor="#e8e8e8"
          height="10vh"
          width="20vw"
          textAlign="center"
          borderRadius="10px"
        >
          <Heading as="h5">Payroll</Heading>
        </Box>

        <Box
          className="quick"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          bgColor="#e8e8e8"
          height="10vh"
          width="20vw"
          textAlign="center"
          borderRadius="10px"
        >
          <Heading as="h5">Payroll</Heading>
        </Box>

        <Box
          className="quick"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          bgColor="#e8e8e8"
          height="10vh"
          width="20vw"
          textAlign="center"
          borderRadius="10px"
        >
          <Heading as="h5">Payroll</Heading>
        </Box>

        <Box
          className="quick"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          bgColor="#e8e8e8"
          height="10vh"
          width="20vw"
          textAlign="center"
          borderRadius="10px"
        >
          <Heading as="h5">Payroll</Heading>
        </Box>
        {/* Repeat the same pattern for other quick boxes */}
      </Flex>
      <Button
        className="btn-check"
        border="#495057 solid"
        marginLeft="50rem"
        height="60px"
        width="240px"
        borderRadius="5px"
      >
        CHECK
      </Button>
    </Box>
  );
};

export default Discover;
