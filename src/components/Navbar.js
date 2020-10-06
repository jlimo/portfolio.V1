import React from "react";
import {
    Heading,
    Flex,
    Button,
    Link,
    Text,
    Box,
} from "@chakra-ui/core";



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
    bg="blue.400"
    >
    <Link href="/">
    <Button border="1px" variantColor="orange" variant="solid" >
            home
        </Button>  
    </Link>
    
    <Link href="/Stacks">
        <Button border="1px" variantColor="orange" variant="solid" >
            Stacks
        </Button>
    </Link>
    <Link href="/projects">
        <Button border="1px" variantColor="orange" variant="solid" >
        Projects
        </Button>
    </Link>
    <Link href="/about">
        <Button border="1px" variantColor="orange" variant="solid">
            about
        </Button>
    </Link>
    <Link href="https://github.com/jlimo?tab=repositories">
        <Button border="1px" variantColor="orange" variant="solid">
            github
        </Button>
    </Link>
    <Link href="https://www.linkedin.com/in/jolean-lima-0025801b4/">
        <Button border="1px" variantColor="orange" variant="solid">
            linkedin
        </Button>
    </Link>
    
    
    </Flex>
    );
};

export default Navbar;