import React, { Component } from 'react';
import { motion } from "framer-motion";
import Arrow from './Arrow';
import Homepage from './Homepage/Homepage';
import LogoDemo from './LogoDemo/Logo';
import ButtonDemo from './ButtonDemo/ButtonDemo';

class ContentContainer extends Component {
	constructor() {
		super();

		this.state = {
			slideIdx: 0,
			prevSlideIdx: 0,
			slides: [
				{
					type: "Homepage",
					text: "Home",
					idx: 0,
					bgColor: "#031D26"
				},
				{
					type: "LogoDemo",
					text: "Hover Effects",
					idx: 1,
					bgColor: "#020F13"
				}, 
				{
					type: "ButtonDemo",
					text: "Button Demo",
					idx: 2,
					bgColor: "#57CBF2"
				}]
		}

		this.clickNext = this.clickNext.bind(this);
		this.clickPrev = this.clickPrev.bind(this);
	}

	clickNext() {
		this.setState({
			slideIdx: this.getNextIdx()
		})
	}

	getNextText() {
		return this.state.slides[this.getNextIdx()].text;
	}

	getNextIdx() {
		let nextSlideIdx = this.state.slideIdx + 1

		if(nextSlideIdx >= this.state.slides.length) return nextSlideIdx = 0;

		return nextSlideIdx;
	}

	clickPrev() {
		this.setState({
			slideIdx: this.getPrevIdx()
		})
	}

	getPrevText() {
		return this.state.slides[this.getPrevIdx()].text;
	}

	getPrevIdx() {
		let prevSlideIdx = this.state.slideIdx - 1

		if(prevSlideIdx < 0) return (this.state.slides.length - 1);

		return prevSlideIdx;
	}

	getSlide() {
		switch(this.state.slides[this.state.slideIdx].type) {
			case "Homepage":
				return <Homepage/>
			case "LogoDemo":
				return <LogoDemo/>
			case "ButtonDemo":
				return <ButtonDemo/>
		}
	}

	render() {
		let currentBgColor = this.state.slides[this.state.slideIdx].bgColor;

		return (
			<motion.div
				className="contentContainer"
				initial={{backgroundColor: currentBgColor}}
				animate={{backgroundColor: currentBgColor}}>
				<Arrow
					prevText={this.getPrevText()}
					type="previous" 
					click={this.clickPrev} 
					currentBgColor={currentBgColor}/>
				<Arrow
					nextText={this.getNextText()}
					type="next"
					click={this.clickNext} 
					currentBgColor={currentBgColor}/>
				{this.getSlide()}
			</motion.div>
		);
	}
}

export default ContentContainer;