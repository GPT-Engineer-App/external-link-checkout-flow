import { Link } from "react-router-dom";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box bg="teal.700" p={4}>
      <Flex>
        <Button as={Link} to="/" colorScheme="whiteAlpha" variant="ghost">
          Home
        </Button>
        <Spacer />
        <Button as={Link} to="/cart" colorScheme="whiteAlpha" variant="ghost">
          Cart
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
