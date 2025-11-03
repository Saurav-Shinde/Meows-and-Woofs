import React from 'react'
import { useState, useEffect} from "react";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";
import Animation1 from "./../../src/assets/animations/Animation1.json"
import axios from 'axios';


const Adoption = () => {
    const [pets, setPets] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    
    useEffect(() => {
      axios.get('http://localhost:5050/api/pets')
           .then(res => setPets(res.data))
           .catch(err => console.error(err));
    }, []);

    const categories = ["All", "Dog", "Cat"]; 
    
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };
    
    const filteredPets = selectedCategory === "All"
      ? pets
      : pets.filter(pet => pet.category.trim() === selectedCategory);

    

  return (
    <>
    <div className="Acontainer text-[#676f58]">
        <div className="flex justify-around h-[22em] border-solid border-[2px] border-[#676f58] rounded-[1em] m-[1em]">
            <div className="w-[60%] h-[22em] z-[2] flex ml-[-10%]">
                <h1 className="text-[3em] w-[50%] text-center z-[2] absolute mt-[2em] mr-[10%]">Every pet deserves a loving home. Adopt  a pet today.</h1>
                <Link className="bg-[#d4c7aa] text-lg border-solid border-[2px] border-[#676f58] rounded-[1rem] h-[2em] w-[25%] ml-[30%] mt-[15em] text-center text-[#676f58]" to={'/AdoptionSignup'}><button style={{background:'#d4c7aa', color:'#676f58'}}>Register</button></Link>
            </div>

            <div className="Ahero z-[1] absolute ml-[48%]">
            <Lottie 
              loop
              animationData={Animation1}
              play
              style={{ width: 500, height: 350 }}
            />
            </div>
        </div>

        <div className="Acategory">
          <div className="Afilter h-[3em] bg-[#868f77] border-b-solid border-b-[2px] mb-[2em] flex items-center ">
            <select 
              id="category-filter"
              name="category-filter"
              className="Afilterbtn flex justify-around items-center border-solid border-[2px] border-[#d4c7aa] bg-transparent rounded-[0.5em] ml-[10%] w-[10%] h-[2.5em] text-[#d4c7aa]" 
              onChange={handleCategoryChange}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="Apet-container">
              <div className="Aproduct-container grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 justify-center w-[80%] ml-[10%] mb-8">
                {filteredPets.map(pet => (
                  <div key={pet.id} className="Aproduct-card bg-[#d4c7aa] p-[0.5em] border-solid border-[2px] border-[#676f58] text-center rounded-[15px]">
                    <img className='Aproduct h-[15em] w-[90%] rounded-[15px] mt-[0.3em] ml-[0.5em]' src={pet.imageUrl} alt={pet.name} />
                    <h1 className='Aheadptext'>{pet.name}</h1>
                    <button className="Adopt w-[40%] h-[2em] border-solid border-[2px] border-[#676f58] bg-[#d4c7aa] text-[#676f58] rounded-[0.5em] hover:bg-[#676f58] hover:text-[#d4c7aa] transition-colors">Adopt</button>
                  </div>
                  ))}
                </div>
          </div>
        </div>

    </div>
    
    </>
  )
}

export default Adoption