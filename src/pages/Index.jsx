import React from "react";
import { Box, Flex, Heading, Text, Button, Container, Stack, Icon, useColorModeValue, Image, Spacer, Link } from "@chakra-ui/react";
import { FaRocket, FaLightbulb, FaHeart, FaBars, FaTimes } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align={"center"} textAlign={"center"}>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("gray.100", "gray.700")} mb={1}>
        <Icon as={icon} w={10} h={10} />
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={useColorModeValue("gray.600", "gray.400")}>{text}</Text>
    </Stack>
  );
};

const Index = () => {
  return (
    <Box>
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding={6} bg={useColorModeValue("gray.200", "gray.900")} color={useColorModeValue("gray.600", "gray.100")}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Brand
        </Heading>
        <Spacer />
        <Button bg={useColorModeValue("gray.100", "gray.700")} display={{ base: "block", md: "none" }}>
          <Icon as={FaBars} />
        </Button>
        <Stack direction={{ base: "column", md: "row" }} display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Contact</Link>
        </Stack>
        <Button variant={"solid"} display={{ base: "none", md: "block" }} colorScheme={"teal"} size={"md"} mr={4}>
          Sign Up
        </Button>
      </Flex>
      <Container maxW={"5xl"} mt={10} textAlign="center">
        <Heading as="h2" size="xl" fontWeight="bold" mb={2}>
          Build Your New Idea
        </Heading>
        <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.400")}>
          Launch your startup with the perfect design and best fit technology!
        </Text>
        <Button mt={10} colorScheme="teal" size="lg" leftIcon={<FaRocket />}>
          Get Started
        </Button>
      </Container>
      <Box p={8} mt={10} bg={useColorModeValue("gray.50", "gray.800")}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading size="lg">Our Features</Heading>
          <Text color={useColorModeValue("gray.600", "gray.400")}>Check out what we offer to boost your business.</Text>
        </Stack>
        <Container maxW={"6xl"} mt={10}>
          <Stack spacing={8} align={"center"} justify={"center"} direction={{ base: "column", md: "row" }}>
            <Feature icon={FaLightbulb} title={"Innovative Ideas"} text={"Get access to a library of innovative ideas that can help kickstart your project."} />
            <Feature icon={FaRocket} title={"Fast Performance"} text={"Enjoy a super fast performance with our optimized resources and architecture."} />
            <Feature icon={FaHeart} title={"Community Love"} text={"Join a community of passionate individuals who are dedicated to mutual success."} />
          </Stack>
        </Container>
      </Box>
      <Box p={6} bg={useColorModeValue("gray.200", "gray.900")} color={useColorModeValue("gray.600", "gray.100")}>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} justify="space-between" align="center">
          <Text>© 2023 Brand. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
