import useSWR from "swr"
import { getData } from "../fetcher"
import { Flex, Text, Box } from "@chakra-ui/core"
import Nav from "../components/nav"

export default () => {
	const { data, error } = useSWR(["user/all"], getData)
	console.log(data)

	return (
		<Box width="100%" height="100%" bg="blue.100" overflow="hidden">
			<Nav active="home" />
			<Flex width="100%" justify="center">
				<Box>
					<Text fontSize="3xl">welcome to home page</Text>
				</Box>
			</Flex>
		</Box>
	)
}
