import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, IconButton, Heading, Text } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box maxW="md" mx="auto" mt="10">
      <Heading mb="6">Todo App</Heading>
      <Box display="flex" mb="4">
        <Input placeholder="Add new todo" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddTodo()} />
        <IconButton icon={<FaPlus />} ml="2" colorScheme="blue" onClick={handleAddTodo} aria-label="Add todo" />
      </Box>
      <List spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index} display="flex" alignItems="center" justifyContent="space-between">
            <Text>{todo}</Text>
            <IconButton icon={<FaTrash />} colorScheme="red" onClick={() => handleDeleteTodo(index)} aria-label="Delete todo" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
