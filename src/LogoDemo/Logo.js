import React, {Component} from 'react';
import { motion } from "framer-motion";
import Word from './Word';
import LogoVariants from './LogoVariants';

class Logo extends Component {
	constructor() {
		super();

		this.state = {
			currentAnimation: "Color Bounce",
			animations: ["Color Bounce", "Color Wave", "Shake", "Focus", "Hide n Peek", "Hang"],
			parentVariant: LogoVariants.colorBounce.parent,
			childVariant: LogoVariants.colorBounce.children,
		}
	}

	updateVariants(name) {
		console.log(name)
		switch(name) {
			case "Color Wave":
				this.setState({
					currentAnimation: name,
					parentVariant: LogoVariants.colorWave.parent,
					childVariant: LogoVariants.colorWave.children
				})
				break;
			case "Color Bounce":
				this.setState({
					currentAnimation: name,
					parentVariant: LogoVariants.colorBounce.parent,
					childVariant: LogoVariants.colorBounce.children
				})
				break;
			case "Shake":
				this.setState({
					currentAnimation: name,
					parentVariant: LogoVariants.shake.parent,
					childVariant: LogoVariants.shake.children
				})
				break;
			case "Focus":
				this.setState({
					currentAnimation: name,
					parentVariant: LogoVariants.focus.parent,
					childVariant: LogoVariants.focus.children
				})
				break;
			case "Hide n Peek":
				this.setState({
					currentAnimation: name,
					parentVariant: LogoVariants.hide.parent,
					childVariant: LogoVariants.hide.children
				})
				break;
			case "Hang":
				this.setState({
					currentAnimation: name,
					parentVariant: LogoVariants.hang.parent,
					childVariant: LogoVariants.hang.children
				})
				break;
		}

	}

	render() {
		console.log(this.state);
		return (
		<motion.div id="logoContainer">
			<motion.div id="logoTextContainer" whileHover="visible" variants={this.state.parentVariant}>
				<Word
					word="hover"
					parentVariant={this.state.parentVariant}
					childVariant={this.state.childVariant}/>
				<Word
					word="effects"
					parentVariant={this.state.parentVariant}
					childVariant={this.state.childVariant}/>
			</motion.div>
			<div className="animationsContainer">
				<h4>Select a hover animation...</h4>
					{
						this.state.animations.map((animation, index) => {
							let classes = "animationOption";
							if(animation === this.state.currentAnimation) classes += " selected";
							return <motion.button
									key={index}
									onClick={this.updateVariants.bind(this, animation)}
									whileHover={{scale: 1.2, transition:{duration:0.1}}}
									className={classes}>{animation}</motion.button>
						})
					}
			</div>
			
		</motion.div>
	)};
}

export default Logo;