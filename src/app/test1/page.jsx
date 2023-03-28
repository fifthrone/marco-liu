"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Rectangle = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleOnClick = () => {
		setIsExpanded(!isExpanded);
	};

	return <div className="border fixed inset-0">Hello</div>;
};

export default Rectangle;
