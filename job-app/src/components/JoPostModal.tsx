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
import { useDispatch } from "react-redux";
import { addjd } from "../redux/slices/JobJD";
import Styles from "../CSS/All.module.css";
type jobjd = {
  title: string;
  department: string;
  jobtype: string;
  100: string;
  period: string;
  expectedSalary: string;
  Experience: string;
  location: string;
  manager: string;
};
export function InitialFocus({ setShowalert }: any) {
  const dispatch = useDispatch();
  const [skills, setSkills] = useState<{ name: string }[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const companyData = {
    title: "",
    department: "",
    jobtype: "",
    100: "",
    period: "",
    expectedSalary: "",
    Experience: "",
    location: "",
    manager: "",
  };
  const [data, setData] = useState<jobjd>(companyData);
  const [checkClick, setCheckClick] = useState<boolean>(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const AddNewSkill = () => {
    setSkills([...skills, { name: "" }]);
  };
  const onChange = (value: string) => {
    console.log("i am value", value);
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleClick = () => {
    setCheckClick(true);
    if (
      data.title.length > 5 &&
      data.department !== "" &&
      data.jobtype !== "" &&
      data[100].length > 0 &&
      data.period !== "" &&
      data.expectedSalary.length > 0 &&
      data.Experience.length > 0 &&
      data.location.length > 1
    ) {
      onClose();
      setShowalert(true);
      dispatch(addjd(data)).then(() => {
        setData(companyData);
      });
    }
  };

  const handleModal = () => {
    onOpen();
    setShowalert(false);
    setCheckClick(false);
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
        onClick={handleModal}
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
              <Input
                fontSize={"1.2rem"}
                name="title"
                ref={initialRef}
                placeholder="title"
                p={"1.5rem"}
                onChange={handleChange}
              />
              {data.title.length < 4 && checkClick === true && (
                <span className={Styles.error}>
                  title should be atleast 5 character
                </span>
              )}
            </FormControl>
            <Flex gap={"1rem"}>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>Department</FormLabel>
                <Select
                  placeholder="department"
                  name="department"
                  size="lg"
                  fontSize={"1.2rem"}
                  onChange={handleChange}
                >
                  {Jobscategory.map((ele) => (
                    <option value={ele.title} key={ele.id}>
                      {ele.title}
                    </option>
                  ))}
                </Select>
                {data.department == "" && checkClick === true && (
                  <span className={Styles.error}>Select atleast one</span>
                )}
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>Job Type</FormLabel>
                <Select
                  placeholder="job type"
                  size="lg"
                  name="jobtype"
                  fontSize={"1.2rem"}
                  onChange={handleChange}
                >
                  <option>Full time</option>
                  <option>Part time</option>
                  <option>Internship</option>
                </Select>
                {data.jobtype == "" && checkClick === true && (
                  <span className={Styles.error}>Select atleast one</span>
                )}
              </FormControl>
            </Flex>
            <Flex gap={"1rem"}>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>Recruitment Quota</FormLabel>
                <Input
                  placeholder={"100"}
                  p={"1.5rem"}
                  name="100"
                  fontSize={"1.2rem"}
                  onChange={handleChange}
                />
                {data[100].length < 1 && checkClick === true && (
                  <span className={Styles.error}>This field should not be empty</span>
                )}
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>Recruitment Period</FormLabel>
                <input
                  type="date"
                  placeholder="Select date"
                  className="p-[0.5rem] w-[100%]"
                  style={{ border: "0.5px solid #EAE7E7", fontSize: "1.2rem" }}
                  name="period"
                  onChange={handleChange}
                />
                {data.period == "" && checkClick === true && (
                  <span className={Styles.error}>Select atleast one</span>
                )}
              </FormControl>
            </Flex>
            <Flex gap={"1rem"}>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>Expected Salary</FormLabel>
                <Input
                  placeholder={"in lakhs"}
                  name="expectedSalary"
                  p={"1.5rem"}
                  fontSize={"1.2rem"}
                  onChange={handleChange}
                />
                {data.expectedSalary.length < 1 && checkClick === true && (
                  <span className={Styles.error}>This field should not be empty</span>
                )}
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>Experience in Years</FormLabel>
                <input
                  type="text"
                  placeholder="Select date"
                  className="p-[0.5rem] w-[100%]"
                  style={{ border: "0.5px solid #EAE7E7", fontSize: "1.2rem" }}
                  onChange={handleChange}
                  name="Experience"
                />
                {data.Experience.length < 1 && checkClick === true && (
                  <span className={Styles.error}>This field should not be empty</span>
                )}
              </FormControl>
            </Flex>
            <Flex gap={"1rem"}>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>Location</FormLabel>
                <Input
                  placeholder={"location"}
                  name="location"
                  p={"1.5rem"}
                  fontSize={"1.2rem"}
                  onChange={handleChange}
                />
                {data.location.length < 4 && checkClick === true && (
                  <span className={Styles.error}>Type correct location</span>
                )}
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"1.5rem"}>
                  Hiring Managers (Optional)
                </FormLabel>
                <input
                  placeholder="Select Manager"
                  className="p-[0.7rem] w-[100%]"
                  style={{ border: "0.5px solid #EAE7E7", fontSize: "1.2rem" }}
                  name="manager"
                  onChange={handleChange}
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
            <Button colorScheme="blue" mr={3} size="lg" onClick={handleClick}>
              Save
            </Button>
            <Button onClick={onClose} size={"lg"}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
