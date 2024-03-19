import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  extendTheme,
  useBreakpointValue,
} from "@chakra-ui/react";


import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import JobCategory from "../components/JobCategory";
const Home = () => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  return (
    <div>
      <Box className="bg-[#211CA6]">
        <Box className="p-4 base:p-0 md:p-6 sm:p-4 w-11/12 md:w-11/12 xsm:w-12/12 base:w-12/12  m-auto">
          <nav className="flex justify-between items-center">
            {isSmallScreen && (
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                  color={"white"}
                  fontWeight={"700"}
                />
                <MenuList>
                  <MenuItem icon={<AddIcon />} command="⌘T">
                    New Tab
                  </MenuItem>
                  <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                    New Window
                  </MenuItem>
                  <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                    Open Closed Tab
                  </MenuItem>
                  <MenuItem icon={<EditIcon />} command="⌘O">
                    Open File...
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
            {/* Website Name */}
            <div className="text-white text-[2.5rem] font-bold text-center">
              BreakDoor.com
            </div>
            {/* Navigation Links */}
            {!isSmallScreen && (
              <ul className="flex justify-center space-x-4 gap-10 text-[1.5rem]">
                <li className="text-white hover:text-gray-300 cursor-pointer">
                  Home
                </li>
                <li className="text-white hover:text-gray-300 cursor-pointer">
                  Company
                </li>
                <li className="text-white hover:text-gray-300 cursor-pointer">
                  Company Jobs
                </li>
                <li className="text-white hover:text-gray-300 cursor-pointer">
                  Facts
                </li>
              </ul>
            )}
            {/* Find Jobs Button */}
            <Button
              background={"#F27405"}
              variant="solid"
              fontSize="1.3rem"
              color={"#fff"}
              p={{ md: "1.8rem 4.5rem", base: "1.5rem 2rem" }}
              _hover={{ background: "#EE9342" }}
              borderRadius={"20px"}
            >
              Post Jobs
            </Button>
          </nav>
          <Center display={"flex"} flexDirection={"column"}>
            <Box
              fontSize={"5rem"}
              textAlign={"center"}
              color={"#fff"}
              fontWeight={"700"}
              w={"35%"}
              display={"flex"}
              flexDirection={"column"}
              gap={"4rem"}
            >
              <Box>
                <Text fontWeight={"500"} fontSize={"1.5rem"} mt={"8rem"}>
                  We have 1M+ great job offers you deserve!
                </Text>
                <Text lineHeight={"6rem"}>Largest Job Site In The World</Text>
              </Box>
              <Flex
                fontSize={"2rem"}
                gap={"1rem"}
                justifyContent={"flex-start"}
              >
                {/* First Button */}
                <Button color="white" p={"1.8rem 3rem"} textColor="black">
                  FIND A JOB
                </Button>

                {/* Second Button */}
                <Button
                  bg="#03A63C"
                  color="white"
                  size={"lg"}
                  p={"1.8rem 4rem"}
                >
                  FIND A CANDIDATE
                </Button>
              </Flex>
            </Box>
          </Center>
        </Box>
      </Box>
      {/* JOB CATEGORY */}
      <Box w={"55%"} m={"auto"}>
        <JobCategory />
      </Box>
    </div>
  );
};

export default Home;
