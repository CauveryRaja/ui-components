import React, { useState, useRef, useEffect } from 'react';
import './Stepper.css';

const Stepper = ({ steps, onPrevious, onNext, children }) => {
	let [currIndex, setCurrIndex] = useState(0);
	// let progressWidth = currIndex/(steps-1)*100;
	let [progressWidth, setProgressWidth] = useState(0);

	const getIndicators = () => {
		return new Array(steps).fill().map((_, index) => (
			<div
				key={index}
				className={`screen-indicator ${index<=currIndex? ' completed' : ''}`}
			>
				{index}
			</div>
		))
	}

	useEffect(() => {
		setProgressWidth(currIndex/(steps-1)*100);
	}, [currIndex]);

	const previous = () => {
		setCurrIndex(currIndex-1);
		onPrevious();
	}

	const next = () => {
		setCurrIndex(currIndex+1);
		onNext();
	}

	return (
		<div className='container'>
			<div className='stepper-wrapper'>
				<div className='progress' style={{width: progressWidth+'%'}}></div>
				{getIndicators()}
			</div>
			<div className='content'>
				{children[currIndex]}
			</div>
			<button disabled={currIndex<=0} className='control-btn' id='prev-btn' onClick={previous}>Previous</button>
			<button disabled={currIndex>=steps-1} className='control-btn' id='next-btn' onClick={next}>Next</button>
		</div>
	);
};

Stepper.defaultProps = {
	steps: 4,
	onPrevious: () => {},
	onNext: () => {}
}

export default Stepper;