import React from 'react';
import Lottie from 'react-lottie';

 import animationOne from '../assets/animations/animationone.json';
// import animationTwo from './../../src/assets/animations/animationtwo.json';
import animationThree from '../assets/animations/animationthreee.json';
import animationFour from '../assets/animations/animationfour.json';
import animationFive from '../assets/animations/animationfive.json';
// import animationSix from './../../src/assets/animations/animationsix.json';
// import animationSeven from './../../src/assets/animations/animationseven.json';
import animationEight from '../assets/animations/animationeight.json';

const MultipleAnimations = () => {
  // Define default options for each animation
  const defaultOptionsOne = {
    loop: true,
    autoplay: true,
    animationData: animationOne,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  // const defaultOptionsTwo = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationTwo,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  const defaultOptionsThree = {
    loop: true,
    autoplay: true,
    animationData: animationThree,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const defaultOptionsFour = {
    loop: true,
    autoplay: true,
    animationData: animationFour,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const defaultOptionsFive = {
    loop: true,
    autoplay: true,
    animationData: animationFive,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};
// const defaultOptionsSix = {
//         loop: true,
//         autoplay: true,
//         animationData: animationSix,
//         rendererSettings: {
//           preserveAspectRatio: 'xMidYMid slice'
//         }
// };
// const defaultOptionsSeven = {
//     loop: true,
//     autoplay: true,
//     animationData: animationSeven,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
// };
const defaultOptionsEight = {
        loop: true,
        autoplay: true,
        animationData: animationEight,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
  return (
  <>

    <div className='ml-5 relative text-[#676f58]'>
        <div className="relative flex w-full bg-[#bdc6b4] text-[#676f58]">
          <div className="absolute z-[-1]">
            <Lottie options={defaultOptionsThree} height={500} width={500} />
          </div>
          <h1 className="absolute mt-[3em] ml-[28%] text-[5em] font-[5000] z-[2]">Meows and Woofs</h1>
          <div className="absolute ml-[65%] z-[-1]">
            <Lottie options={defaultOptionsFive} height={500} width={500} />
          </div>
        </div>

        
        <div className="w-[80%] ml-[20%] mt-[35em] relative bg-[#bdc6b4] text-[#676f58]">

          <div className="w-[50%] absolute mt-[5em] z-[2] text-center ">
            <h1 className='text-[1.5em] font-[700] m-0'>"Your Pets Deserve the Best Care"</h1>
            <p className='conetext1'>We’re here to make sure that your furry friends stay healthy, happy, and full of energy! Our carefully curated selection of food and accessories has been specially chosen to meet the unique needs of both cats and dogs. From nutritious meals to fun toys and grooming essentials, we have everything your pet could need.
Whether you have a playful puppy, a curious kitten, or a loyal senior pet, our range of products is designed to cater to pets of all ages. Trust us to provide the best quality at the best prices so that you can focus on enjoying every moment with your beloved companion.</p>
          </div>

          <div className="absolute z-[-1] ml-[30%] mt-[1em]">
            <Lottie options={defaultOptionsEight} height={600} width={600} />
          </div>

        </div>

        <div className="relative w-[80%] ml-[20%] mt-[70em] bg-[#868f77] text-[#676f58]">

          <div className="absolute z-[-1] mt-[7em]">
          <Lottie options={defaultOptionsOne} height={300} width={300} />
          </div>
          <div className="w-[50%] absolute text-center z-[2] mt-5em ml-[30%]">
            <h1 className='text-[1.5em] font-[700] mt-[5em]'>"Perfect Nutrition for Your Feline Friend"</h1>
            <p className='conetext2'>Cats have unique dietary needs, and we’re here to ensure they get the best nutrition possible. Our range of cat food is formulated to promote healthy growth, a shiny coat, and overall wellness. Choose from a variety of flavors that will keep your cat coming back for more, while providing the essential nutrients they need.With our selection of accessories, treats, and toys, you can create the perfect environment for your kitty to thrive. Treat your cat to quality food and fun products that make every day a little more special!</p>
          </div>

        </div>

        <div className="w-[80%] ml-[20%] relative mt-[105em] z-[1] pb-[5em] text-[#676f58] ">
          <div className="w-[50%] text-center absolute z-[2]">
            <h1 className='text-[1.5em] font-[700]'>"Pamper Your Pooch with the Best Care"</h1>
            <p className='conetext3'>Dogs bring so much joy to our lives, and we’re here to help you give them the love and care they deserve. From nutritious food that keeps them healthy and active to cozy accessories that make them feel at home, we offer everything you need to keep your furry friend happy.Explore our selection of dog products designed to support every aspect of your dog’s well-being, from grooming essentials to fun toys. Give your loyal companion the quality they deserve with products crafted to bring out the best in them.</p>
          </div>
          <div className="absolute z-[-1] ml-[60%]">
          <Lottie options={defaultOptionsFour} height={300} width={300} />
          </div>
        </div>
        <div className="border-solid border-[3px] border-[#676f58] w-[40%] relative mt-[20em] ml-[35%] mb-[2em]"></div>
    </div>
</>
  );
};

export default MultipleAnimations;
