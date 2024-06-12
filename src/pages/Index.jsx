import React, { useState, useEffect } from "react";
import { Container, VStack, HStack, Box, Text, Button, Image, IconButton, Input, FormControl, FormLabel, useToast } from "@chakra-ui/react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import axios from "axios";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", address: "" });
  const toast = useToast();

  useEffect(() => {
    // Fetch products from an external link
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data.slice(0, 9)))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleCheckout = () => {
    // Handle checkout logic here
    console.log("User Info:", userInfo);
    console.log("Cart Items:", cart);
    toast({
      title: "Order placed",
      description: "Your order has been placed successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setCart([]);
    setUserInfo({ name: "", email: "", address: "" });
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Text fontSize="3xl" fontWeight="bold">
          Product List
        </Text>
        <HStack spacing={4} wrap="wrap" justify="flex-start">
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} w="200px" h="300px">
              <Image src="https://via.placeholder.com/150" alt={product.title} boxSize="150px" objectFit="cover" mx="auto" />
              <Text mt={2} fontWeight="bold">
                {product.title}
              </Text>
              <Text>${product.price}</Text>
              <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Box>
          ))}
        </HStack>

        <Text id="cart" fontSize="3xl" fontWeight="bold">
          Cart
        </Text>
        <VStack spacing={4} w="full">
          {cart.map((product) => (
            <HStack key={product.id} w="full" justify="space-between" p={4} borderWidth="1px" borderRadius="lg">
              <Text>{product.title}</Text>
              <IconButton aria-label="Remove from cart" icon={<FaTrash />} colorScheme="red" onClick={() => removeFromCart(product.id)} />
            </HStack>
          ))}
        </VStack>

        <Text fontSize="3xl" fontWeight="bold">
          Checkout
        </Text>
        <VStack spacing={4} w="full">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={userInfo.name} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={userInfo.email} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="address">
            <FormLabel>Address</FormLabel>
            <Input type="text" name="address" value={userInfo.address} onChange={handleInputChange} />
          </FormControl>
          <Button colorScheme="teal" onClick={handleCheckout}>
            Place Order
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
