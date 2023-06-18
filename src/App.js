import './input.css'
import Navbar from './components/navbar';
import Descreption from './components/descreption';
import About from './components/about';
import ImageFirst from './components/imageFirst';
import ImageSecond from './components/imageSecond';
import React from 'react';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import mobImg1 from './assets/mobImg1.jpg'
import mobImg2 from './assets/mobImg2.jpg'
import mobImg3 from './assets/mobImg3.jpg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      images: [
        img1,
        img2,
        img3,
      ],
      mobileImages:[
        mobImg1,
        mobImg2,
        mobImg3
      ],
      titles: [
        'Discover innovative ways to decorate',
        'We are available all across the globe',
        'Manufactured with the best materials'
      ],
      paragraphs:[
        'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
        'With stores all over the world, it’s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don’t hesitate to contact us today.',
        'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
      ],
      currentIndex: 0
    };
  }

  goToPreviousImage = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + prevState.images.length) % prevState.images.length
    }));
  }

  goToNextImage = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.images.length
    }));
  }
  render(){
    const { images, currentIndex, titles, paragraphs, mobileImages } = this.state;
    const currentImage = images[currentIndex];
    const currentTitle = titles[currentIndex];
    const currentParagraph = paragraphs[currentIndex];
    const currentMobileImage = mobileImages[currentIndex]
  return (
    < >
    <div className='mobile:grid grid-auto-rows-2 grid-cols-4 overflow-hidden '>
      <Navbar image={currentImage} mobImage={currentMobileImage} next={this.goToNextImage} pervious={this.goToPreviousImage} />
      <Descreption  next={this.goToNextImage} pervious={this.goToPreviousImage} titles={currentTitle} paragraphs={currentParagraph}/>
      <ImageFirst />
      <About  />
      <ImageSecond />
    </div>
    </>
  );
}}

export default App;
