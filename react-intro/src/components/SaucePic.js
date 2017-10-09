//SaucePic.js
import React from 'react';

const backgroundImg = (sauce) => ({backgroundImage : `url(./src/assets/${sauce}.gif)`});

export default ({sauce}) => {
	return (<div className="sauce-img" style={backgroundImg(sauce)}></div>)
}
	