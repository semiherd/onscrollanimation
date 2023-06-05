import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'

const Body= () => {
	return (
		<div>
			<section className="first-section">
				<FirstSection />
			</section>
			<section className="second-section">
				<SecondSection />
			</section>		
		</div>
	)
}
export default Body;