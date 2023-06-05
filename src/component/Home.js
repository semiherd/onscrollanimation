import React,{useEffect} from 'react'
import {useAppDispatch} from '../context/AppContext'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'

const Home = () => {
  	const appDispatch= useAppDispatch();
	
	  const handleScroll = async () => {
		console.log('window',window);
		const scrollData= {
			x: window.scrollX,
			y: window.scrollY 
		}
		await appDispatch({
			type: 'scroll',
			data: scrollData
		})
	
	};
	
	useEffect(() => {
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="home-container">
			<section className="app-header">
				<Header />
			</section>
			<section className="app-body">
				<Body />
			</section>
			<section className="app-footer">
				<Footer />
			</section>
		</div>
	)
}
export default Home;