// Button Ecosystem for the Designer Folio
import React from "react";
import {
	useDisclosure,
	Drawer,
	DrawerOverlay,
	IconButton,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Readme from "../../../pages/folio/develop/Readme";

const DayRight = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState("right");
	const [size, setSize] = React.useState("full");

	return (
		<>
			<IconButton
				onClick={onOpen}
				as="ctrlBtns"
				variant="outline"
				colorScheme="black"
				aria-label="Next"
				icon={<ArrowRightIcon />}
			/>
			<Drawer
				placement={placement}
				onClose={onClose}
				isOpen={isOpen}
				size={size}
			>
				<DrawerOverlay />
				<Readme />
			</Drawer>
		</>
	);
};

export default DayRight;
