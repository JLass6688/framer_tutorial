class LogoVariants {
	static colorBounce = {
		parent: {
  			visible: {
  				transition: {
  					staggerChildren: 0.05
  				}
  			}
  		}, 
  		children: {
  			visible: { 
  				y: [0,-40, -10, -15], 
  				color: "#57CBF2", 
  				transition:{
  					duration: 0.3, 
  					times: [0, 0.6, 0.9, 1]
  				}
  			}
		}
	};

	static colorWave = {
		parent: {
  			visible: {
  				transition: {
  					staggerChildren: 0.05
  				}
  			}
  		}, 
  		children: {
  			visible: { 
  				color: [null, "#57CBF2", "#C7345A", "#359478"], 
  				transition:{
  					loop: Infinity,
  					duration: 3, 
  					times: [0, 0.33, 0.66, 1]
  				}
  			}
		}
	};

	static shake = {
		parent: {
  			visible: {}
  		}, 
  		children: {
  			visible: { 
  				rotateZ: [0, 7.5, 0, -7.5, 0],
  				transformOrigin: "center center",
  				transition: {
  					loop: Infinity,
  					duration: 0.2
  				}
  			}
		}
	};

	static focus = {
		parent: {
  			visible: {
  				scale: 1.2,
  				y: -10,
  				transition: {
  					duration: 0.2
  				}
  			}
  		}, 
  		children: {}
	};

	static hide = {
		parent: {
  			visible: {
  				scale: [1, 0.9, 0.9, 1.2, 1.2, 1],
  				overflow: "hidden",
  				transition: {
  					times: [0, 0.1, 0.7125, 0.85, 0.9, 1],
  					duration:2
  				}
  			}
  		}, 
  		children: {
  			visible: {
  				y: [0, 90, 90, 0],
  				transition: {
  					times: [0,0.1, 0.95, 1],
  					duration: 1.625
  				}
  			}
  		}
	};

	static hang = {
		parent: {
			visible: {
				transition: {
  					staggerChildren: 0.05
  				}
  			}
		}, 
  		children: {
  			visible: {
  				rotateZ: [0, 9, 6, 8, 7, 7.5],
  				transformOrigin: "top left",
  				transition: {
  					duration: 1
  				}
  			}
  		}
	};
}

export default LogoVariants;