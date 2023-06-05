import React, {useRef,useEffect} from 'react'
import berlin from '../asset/image/berlin.jpg'
import london from '../asset/image/london.jpg'
import {useAppState} from '../context/AppContext'

const FirstSection= () => {
	const appState= useAppState()
	const leftImageRef= useRef()
	const rightImageRef= useRef()
	const textRef= useRef({visible:false})

	async function smallerPhoto(){
		try{
			const val=textRef.current.visible
			textRef.current.visible=!val;
			if(textRef.current.visible)
				leftImageRef.current.className = "smaller-left";
			else if(!textRef.current.visible)
				leftImageRef.current.className = "initial-left";
			if(textRef.current.visible)
				rightImageRef.current.className = "smaller-right";
			else if(!textRef.current.visible)
				rightImageRef.current.className = "initial-right";
			if(textRef.current.visible)
				textRef.current.className = "wide-text-container";
			else if(!textRef.current.visible)
				textRef.current.className = "small-text-container";
			
		}catch(e){
			console.log(e)
		}
	}
	async function handleHomePageImage(){
		try{
			const scrolled= window.innerHeight + window.scrollY;
			const bodyOffset= window.document.body.offsetHeight;
			if(scrolled < (bodyOffset) ){
				if(appState.scroll.y>100)textRef.current.visible=false		
			}
		}catch(e){
			console.log(e)
		}
	}
	useEffect(() => {
		textRef.current.visible=false
	},[])

	useEffect(() => {
		handleHomePageImage()
	},[appState])

	useEffect(() => {
		if(textRef.current.visible){
			leftImageRef.current.className = "smaller-left";
			rightImageRef.current.className = "smaller-right";
			textRef.current.className = "wide-text-container";
		}else if(!textRef.current.visible){
			leftImageRef.current.className = "initial-left";
			rightImageRef.current.className = "initial-right";
			textRef.current.className = "small-text-container";
		}
	},[textRef.current.visible])

	return (
		<div>
			{textRef?.current?.visible && <h2>{textRef.current.visible}</h2>}		
			<div onClick={() => smallerPhoto()} className="photos">
				<img ref={leftImageRef} src={berlin} alt="berlin" id="berlin" />
				<img ref={rightImageRef} src={london} alt="london" id="london" />
			</div>
			
			<div ref={textRef} className="small-text-container">
				<h2>
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
				</h2>
				<h2>
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
				</h2>
			</div>
		</div>
	)
}
export default FirstSection;