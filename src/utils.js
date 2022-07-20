import sanity from './client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityBlocks } from 'sanity-blocks-vue-component';


const builder = imageUrlBuilder(sanity)

export const CreateURL = (source, width = 1920, height = 1080) => {
	return builder.image(source).width(width).height(height).url()
}

export const TextToHTML = (text) => {
	return text.replace(/\n/g, "<br>")
}

export const FormatDate = (date) => {
	return new Date(date).toLocaleDateString()
} 
export {SanityBlocks}

