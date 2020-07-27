import React from 'react';
import { motion } from 'framer-motion';

const arrow = (props) => {
	const determineColorPalette = () => {
		let arrowFill = "";
		let arrowHoverFill = "";
		let textColor = "";
		let textHoverColor = "";

		switch(props.currentBgColor) {
			case "#031D26":
				arrowFill = "#FFF";
				arrowHoverFill = "#57CBF2";
				textColor = "#FFF";
				textHoverColor = "#57CBF2";
				break;
			case "#57CBF2":
				arrowFill = "#FFF";
				arrowHoverFill = "#031D26";
				textColor = "#FFF";
				textHoverColor = "#031D26";
				break;
			case "#020F13":
				arrowFill = "#FFF";
				arrowHoverFill = "#57CBF2";
				textColor = "#FFF";
				textHoverColor = "#57CBF2";
				break;
		}

		return {
			arrowFill: arrowFill,
			arrowHoverFill: arrowHoverFill,
			textColor: textColor,
			textHoverColor: textHoverColor
		}
	}

	const hover = {
		hover: {scale: 1.25, fill: determineColorPalette().arrowHoverFill, transition: {duration: 0.2}}
	}

	const textHover = {
		hidden: {opacity: 0, transition: {duration: 0.0005}},
		hover: {color: determineColorPalette().textHoverColor, opacity: 1, transition: {duration: 0.2}}
	}

	return (
		<motion.div 
			className={"arrowContainer arrow" + props.type} 
			onClick={props.click}
			whileHover="hover"
			variants={hover}
			style={{ fill: determineColorPalette().arrowFill}}>
			{
				(props.type === "next") ?
			<div>
			<motion.h4 initial="hidden" variants={textHover}>{props.nextText}</motion.h4>
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 492.004 492.004">
				<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
				c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
				c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
				c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
			</svg>
			</div>
			:
			<div>
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 492 492">
				<path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
				C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
				c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
				l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/>
			</svg>
			<motion.h4 initial="hidden" variants={textHover}>{props.prevText}</motion.h4>
			</div>
			}
		</motion.div>
	)
}

export default arrow;