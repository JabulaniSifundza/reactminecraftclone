import {TextureLoader, NearestFilter, RepeatWrapping} from 'three';

import {
	dirtImg,
	grassImg,
	glassImg,
	logImg,
	woodImg
} from './images';

const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);



dirtTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;



export {
	dirtTexture,
	grassTexture,
	logTexture,
	glassTexture,
	woodTexture,
	groundTexture
}

