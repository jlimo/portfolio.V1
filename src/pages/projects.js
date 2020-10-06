import React from "react";
import {
    Box,
    Link,
    Heading,
    Text,
} from "@chakra-ui/core";


function Projects() {
    return (
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        width="100%"
        height="100%"
        >
    <Heading marginTop="10%" color="orange.400">
        Projects
    </Heading>
    <Text as="u" fontSize="15pt">
     5 days Around the World:
    </Text>
    <Link href="https://github.com/jlimo/First-Project">code</Link>
    <Text>
        a Game where you start on a continent then have to travel to every continent within 5 turns and make it home.
    </Text>
    <Text as="u" fontSize="15pt">
        Wallpapers:
    </Text>
    <Link href="https://github.com/jlimo/project-2" >code</Link>
    <Text>
        login in to the app and check out the wallpapers inside. favorite the 1's you like and view them on your profile.
    </Text>
    <Text as="u" fontSize="15pt">
        WhatToWatch:
    </Text>
    <Link href="https://github.com/chuey619/whatShouldIWatch">code</Link>
    <Text>
        A app that allows you to login, search up a show and see what streaming services allow you to watch it.
    </Text>
    <Text as="u" fontSize="15pt">
        PokeApp
    </Text>
    </Box>
    )
}

export default Projects;