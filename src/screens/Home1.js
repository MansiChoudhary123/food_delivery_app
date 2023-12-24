import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";


export default function Home1() {
  const [search,setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      response = await response.json();
      setFoodItem(response[0]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange ={(e)=>{setSearch(e.target.value)}}
              />
            
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900×700/?Burger"
              className="d-block w-100"
              style={{ filter: "brightness(30%" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×700/?momo"
              className="d-block w-100"
              style={{ filter: "brightness(30%" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×700/?pizza"
              className="d-block w-100"
              style={{ filter: "brightness(30%" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className="container">
        {foodCat !== null && foodCat.length > 0
          ? foodCat.map((data, index) => {
              return (<div className="row mb-3">
                <div key={index} className="fs-3 m-3">{data.CategoryName}</div>
              <hr/>
              {foodItem != []?
              foodItem.filter((item)=>(item.CategoryName == data.CategoryName)&&(item.name.toLowerCase().includes(search.toLocaleLowerCase())))
              .map(filterItems =>{
                return(
                  <div key={filterItems.id} className="col-12 col-md-6 col-lg-3">
                    <Card foodItem = {filterItems}
                    options = {filterItems.options[0]}
                    ></Card>
                  </div>
                )
              }):<div>no items available in this category</div>}
              </div>
              )
            })
          : <div>No categories available</div>
        }
      
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
