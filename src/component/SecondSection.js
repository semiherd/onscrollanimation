import React, {useRef,useEffect} from 'react'
import barcelona from '../asset/image/barcelona.jpg'
import {useAppState} from '../context/AppContext'

const SecondSection= () => {
	const appState= useAppState()
	const barcelonaRef= useRef()
	
	async function handleImage(){
		try{
			if(appState.scroll.y>25) barcelonaRef.current.className="second-section-image-down"		
			if(appState.scroll.y<200) barcelonaRef.current.className="second-section-image-up"
		}catch(e){
			console.log(e)
		}
	}
	useEffect(() => {
		handleImage() 
	},[appState?.scroll?.y])

	return (
		<div>		
			<img ref={barcelonaRef} src={barcelona} alt="barcelona" id="barcelona" />
		</div>
	)
}
export default SecondSection;