import React from "react";
import {
    Heading,
    Flex,
    Button,
    Link,
    Text,
    Box,
} from "@chakra-ui/core";
import { About, projects, Stacks } from "../pages";



function Navbar() {
return (
<Flex
    display="flex"
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    padding="1.5rem"
    gridArea="nav"
    color="white"
    bg="blue"
    >
    <Link to="/">
        <Flex Align="center" mr="{3}">
        <Heading
        as="h1"
        size="lg"
        letterSpacing={"-.1rem"}
        color="orange"
        >
        J.L
        </Heading>
        </Flex>
    </Link>
    
    <Link to="/Stacks">
        <Button border="1px" variantColor="orange" variant="outline" >
            Stacks
        </Button>
    </Link>
    <Link to="/projects">
        <Button border="1px" variantColor="orange" variant="outline" >
        Projects
        </Button>
    </Link>
    <Link to="/about">
        <Button border="1px" variantColor="orange" variant="outline">
            about
        </Button>
    </Link>
    </Flex>
    );
};

export default Navbar;