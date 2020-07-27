import React from 'react';
import { motion } from "framer-motion";

const letter = (props) => {
	return <motion.div 
				id={"letter-" + props.value} 
				className="letter"
				variants={props.variants}
				>

				{props.value}
		   </motion.div>
}

export default letter;
