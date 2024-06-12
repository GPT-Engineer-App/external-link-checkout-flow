import { Link } from "react-router-dom";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <Box bg="teal.700" p={4}>
      <Flex>
        <Button as={Link} to="/" colorScheme="whiteAlpha" variant="ghost" color="white">
          Home
        </Button>
        <Spacer />
        <Button as={Link} to="/cart" colorScheme="whiteAlpha" variant="ghost" color="white" leftIcon={<FaShoppingCart />}>
          Cart
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
