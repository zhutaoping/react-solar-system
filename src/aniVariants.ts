export const videoVariants = {
	enter: {
		opacity: 0,
		x: -500,
	},
	center: {
		opacity: 1,
		x: 0,
		transition: { type: "tween", duration: 1, ease: "easeOut" },
	},
	exit: {
		opacity: 0,
		x: -1000,
		transition: { type: "tween", duration: 0.3, ease: "easeIn" },
	},
};

export const videoFromTopVariants = {
	enter: {
		opacity: 0,
		y: -500,
	},
	center: {
		opacity: 1,
		y: 0,
		transition: { type: "tween", duration: 1, ease: "easeOut" },
	},
	exit: {
		opacity: 0,
		y: -1000,
		transition: { type: "tween", duration: 0.3, ease: "easeIn" },
	},
};

export const contentVariants = {
	hidden: {
		// opacity: 0,
	},
	show: {
		// opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
	exit: {
		// opacity: 0,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const contentItem = {
	hidden: {
		opacity: 0,
		x: 300,
		y: 50,
	},
	show: {
		opacity: 1,
		x: 0,
		y: 0,

		transition: {
			duration: 1,
		},
	},
	exit: {
		opacity: 0,
		x: -5000,
		transition: {
			duration: 0.2,
			ease: "easeIn",
		},
	},
};
