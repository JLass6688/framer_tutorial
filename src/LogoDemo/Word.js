import React from 'react';
import { motion } from "framer-motion";
import Letter from './Letter'

const word = (props) => {
  console.log(props);
	return (
		<motion.div className="word" >
			{
				props.word.split("").map((letter, index) => {
					return <Letter value={letter} key={index} variants={props.childVariant}/>
				})
			}
		</motion.div>

	)
}

export default word;