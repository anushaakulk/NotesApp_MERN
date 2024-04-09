import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Image position={"absolute"} right={0} w={500} src={note} />
      <Heading mt={16} textAlign={"start"} size={"4xl"}>
        Note App
      </Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
      Our notes app is a user-friendly and efficient tool designed to help individuals organize their thoughts, ideas, and tasks seamlessly. With its intuitive interface and robust features, users can effortlessly create, edit, and manage their notes with ease. Whether jotting down quick reminders, drafting detailed thoughts, or organizing tasks with tags, our app empowers users to stay productive and organized wherever they go. Built using the MERN stack (MongoDB, Express.js, React, Node.js) and incorporating JWT authentication for security, our notes app prioritizes both functionality and user experience. Say goodbye to scattered notes and hello to streamlined organization with our notes app.
      </Text>
    </Box>
  );
}
