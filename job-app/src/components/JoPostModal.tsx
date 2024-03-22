import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { HStack } from "@chakra-ui/react";
import { Jobscategory } from "../utils/JobCategory";
import Skills from "./skills/Skills";

export function InitialFocus() {
  const [skills, setSkills] = useState<{ name: string }[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const AddNewSkill = () => {
    setSkills([...skills, { name: "" }]);
  };
  const onChange = (value: string) => {
    console.log("i am value", value);
  };
  return (
    <>
      <Button
        background={"#F27405"}
        variant="solid"
        fontSize="1.3rem"
        color={"#fff"}
        p={{ md: "1.8rem 4.5rem", base: "1.5rem 2rem" }}
        _hover={{ background: "#EE9342" }}
        borderRadius={"20px"}
        onClick={onOpen}
      >
        Post Jobs
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent maxW={"80vw"} w={{ sm: "80vw", lg: "50vw" }}>
          <ModalHeader fontSize={"2.5rem"}>Job Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            pb={6}
            width={"90%"}
            m={"auto"}
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            <FormControl>
              <FormLabel fontSize={"1.5rem"}>Job Title</FormLabel>
              <Input fontSize={"1.2rem"} ref={initialRef} placeholder="title" p={"1.5rem"}/>
            </FormControl>
            <Flex gap={"1rem"}>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>Department</FormLabel>
                <Select placeholder="department" size="lg" fontSize={"1.2rem"}>
                  {Jobscategory.map((ele) => (
                    <option value="" key={ele.id}>
                      {ele.title}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>Job Type</FormLabel>
                <Select placeholder="job type" size="lg" fontSize={"1.2rem"}>
                  <option>Full time</option>
                  <option>Part time</option>
                  <option>Internship</option>
                </Select>
              </FormControl>
            </Flex>
            <Flex gap={"1rem"}>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>Recruitment Quota</FormLabel>
                <Input placeholder={"100"} p={"1.5rem"} fontSize={"1.2rem"}/>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>Recruitment Period</FormLabel>
                <input
                  type="date"
                  placeholder="Select date"
                  className="p-[0.5rem] w-[100%]"
                  style={{ border: "0.5px solid #EAE7E7",fontSize:"1.2rem" }}
                />
              </FormControl>
            </Flex>
            <Flex gap={"1rem"}>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>Expected Salary</FormLabel>
                <Input placeholder={"in lakhs"} p={"1.5rem"} fontSize={"1.2rem"} />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>Experience in Years</FormLabel>
                <input
                  type="text"
                  placeholder="Select date"
                  className="p-[0.5rem] w-[100%]"
                  style={{ border: "0.5px solid #EAE7E7",fontSize:"1.2rem" }}
                />
              </FormControl>
            </Flex>
            <Flex gap={"1rem"}>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>Location</FormLabel>
                <Input placeholder={"location"} p={"1.5rem"} fontSize={"1.2rem"}/>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>
                  Hiring Managers (Optional)
                </FormLabel>
                <input
                  placeholder="Select Manager"
                  className="p-[0.7rem] w-[100%]"
                  style={{ border: "0.5px solid #EAE7E7",fontSize:"1.2rem" }}
                />
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel fontSize={"1.5rem"}>Skill Sets</FormLabel>
              <HStack onClick={AddNewSkill} cursor={"pointer"}>
                <Box
                  background={"#03A63C"}
                  className="xs:h-[42px] xs:w-[42px] h-8 w-[20px] rounded-full flex justify-center items-center cursor-pointer"
                >
                  <MdOutlineAdd
                    className="xs:h-6 xs:w-6 h-4 w-4"
                    //   style={{ background: "#03A63C" }}
                    color="#fff"
                  />
                </Box>
                <Text color={"#03A63C"} fontSize={"1.2rem"} fontWeight={"bold"}>
                  Add New Skill
                </Text>
              </HStack>
            </FormControl>
            <Flex flexWrap={"wrap"} gap={"1rem"}>
              {skills.map((ele) => (
                <Skills key={ele.name} onChange={onChange} />
              ))}
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} size='lg'>
              Save
            </Button>
            <Button onClick={onClose} size={"lg"}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
