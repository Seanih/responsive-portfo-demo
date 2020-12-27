import React from 'react';
import CardItem from './CardItem';
import '../styles/Cards.scss';
import waterfall_pic from '../images/img-9.jpg';
import island_pic from '../images/img-2.jpg';
import boats_pic from '../images/img-3.jpg';
import field_pic from '../images/img-4.jpg';
import fancy_pic from '../images/img-5.jpg';

const Cards = () => {
	return (
		<div className='cards'>
			<h1>Where will you go next?</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src={waterfall_pic}
							text="waterfalls you'd wanna skinny dip in!"
							label='Adventure'
							path='/services'
						/>
						<CardItem
							src={island_pic}
							text='beautiful island!'
							label='Luxury'
							path='/services'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src={boats_pic}
							text='Speed Boats'
							label='Activities'
							path='/services'
						/>
						<CardItem
							src={field_pic}
							text='exclusive sports areas'
							label='Sports'
							path='/services'
						/>
						<CardItem
							src={fancy_pic}
							text='5 star restaurants'
							label='Luxury'
							path='/services'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Cards;
