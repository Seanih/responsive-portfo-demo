import React from 'react';
import CardItem from './CardItem';
import '../styles/Cards.scss';

const Cards = () => {
	return (
		<div className='cards'>
			<h1>Where will you go next?</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Cards;
