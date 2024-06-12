import { Link } from "react-router-dom";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex>
        <Button as={Link} to="/" colorScheme="teal" variant="ghost">
          Home
        </Button>
        <Spacer />
        <Button as={Link} to="/cart" colorScheme="teal" variant="ghost">
          Cart
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
