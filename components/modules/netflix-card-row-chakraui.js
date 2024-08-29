"use client"
import { useRef } from 'react';

import { Flex, Box, Heading, Button, useBreakpointValue } from '@chakra-ui/react';
import ProductCard from '../common/product-card';

export default function UpcomingEvents() {
    const rowRef = useRef(null);
    const scrollAmount = useBreakpointValue({ base: 200, md: 300 });

    const scrollLeft = () => {
        if (rowRef.current) {
            rowRef.current.scrollLeft -= scrollAmount;
        }
    };

    const scrollRight = () => {
        if (rowRef.current) {
            rowRef.current.scrollLeft += scrollAmount;
        }
    };
    return (
        <Flex
            as='section'
            w='100%'
            direction='column'
            gap={3}
        >
            <Box className="title-bar">
                <Heading>Upcoming Events</Heading>
            </Box>
            <Box>
                <Flex
                    pb={6}
                    overflowX="scroll"
                    overflowY="hidden"
                    scrollBehavior="smooth"
                    sx={{ scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}
                    gap={6}
                    className="slider"
                    ref={rowRef}
                >
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Flex>
                <Flex
                    justify='flex-end'
                    gap={4}
                >
                    <Button
                        onClick={scrollLeft}
                        aria-label="Scroll Left"
                        size="sm"
                        // colorScheme="teal"
                        // variant="ghost"
                        zIndex={10}
                    >&#9664;</Button>
                    <Button
                        onClick={scrollRight}
                        aria-label="Scroll Right"
                        size="sm"
                        // colorScheme="teal"
                        // variant="ghost"
                        zIndex={10}
                    >&#9654;</Button>
                </Flex>
            </Box>
        </Flex>
    )
}
