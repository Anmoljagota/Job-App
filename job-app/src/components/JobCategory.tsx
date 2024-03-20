import { Jobscategory } from "../utils/JobCategory";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { IoBagAddOutline } from "react-icons/io5";
const JobCategory = () => {
  return (
    <div>
      <SimpleGrid columns={[1, 2, 4]} mt={"3rem"}>
        {Jobscategory.map((item) => (
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            key={item.id}
            textAlign={"center"}
            p={"1rem"}
            gap={"0.5rem"}
            boxShadow={
              "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
            }
            cursor={"pointer"}
          >
            <IoBagAddOutline fontSize={"4rem"} color="#46975F" />
            <Text fontSize={"1.3rem"} fontWeight={"700"}>
              {item.title}
            </Text>
            <Text>{item.open}</Text>
          </Flex>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default JobCategory;
