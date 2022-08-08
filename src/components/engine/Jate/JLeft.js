// Button Ecosystem for the Designer Folio
import React from "react";
import {
	useDisclosure,
	Drawer,
	DrawerOverlay,
	IconButton,
} from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import Jate from "../../../pages/folio/develop/Jate";

const JLeft = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState("left");
	const [size, setSize] = React.useState("full");

	return (
		<>
			<IconButton
				onClick={onOpen}
				as="ctrlBtns"
				variant="outline"
				colorScheme="black"
				aria-label="Back"
				icon={<ArrowLeftIcon />}
			/>
			<Drawer
				placement={placement}
				onClose={onClose}
				isOpen={isOpen}
				size={size}
			>
				<DrawerOverlay />
				<Jate />
			</Drawer>
		</>
	);
};

export default JLeft;
