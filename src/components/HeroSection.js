import React from 'react';
import { Button } from './Button';
import '../styles/HeroSection.scss';

const HeroSection = () => {
	return (
		<div className='hero-container'>
			<video src='/videos/video-2.mp4' autoPlay loop muted />
			<h1>The Sky Is The Limit</h1>
			<p>Reach for the moon</p>
			<div className='hero-btns'>
				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
				>
					Get Started
				</Button>
				<Button
					className='btns'
					buttonStyle='btn--primary'
					buttonSize='btn--large'
				>
					Watch Trailer <i className='far fa-play-circle' />
				</Button>
			</div>
		</div>
	);
};

export default HeroSection;
