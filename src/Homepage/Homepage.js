import React from 'react';
import {motion} from 'framer-motion';

const homePage = () => {
	const getPanels = () => {
		let panels = [];
		for(let i = 0; i < 270; i++) {
			panels.push(
				<motion.div
					className="panel"
					animate={{
						backgroundColor: ["#031D26","#072630", "#031D26"],
						transition: {
							duration: 4,
							delay: getDelayValue()
						}
					}} 
					style={{width: "5%", height: "100px"}}/>
			)
		}

		return panels;
	}

	const getDelayValue = () => {
		return Math.floor(Math.random() * 10);
	}

	return (

		<motion.div id="homepageContainer">
			<div className="panelContainer">
				{getPanels()}
			</div>
			<motion.div id="homeLogoContainer">
				<motion.div 
					animate={{
						width: [0, 200],
						transition: {
							duration: 0.5,
							delay: 3
						}
					}} 
					className="underline"/>
				<motion.h2 
					animate={{
						opacity: [0,1],
						transition: {
							delay: 1,
							duration: 2,
							times: [0, 1]
						}
					}}>framer motion</motion.h2>
				<motion.div 
					animate={{
						width: [0, 200],
						transition: {
							duration: 0.5,
							delay: 3
						}
					}} 
					className="underline"/>
			</motion.div>
		</motion.div>

	);
}

export default homePage;