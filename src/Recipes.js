import React, { useEffect, useState } from "react";

const Recipes = () => {

  const [recipes, setRecipes] = useState({});
  
  useEffect(() => {
    fetch("https://api.airtable.com/v0/appM9q6JTxRolaNCN/recipes?api_key=YOUR_API_KEY")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.records);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const styleObj = {
    float: "left",
    margin: "15px",
    color: "#fff"
  }

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((record) => (
          <a href={record.fields.url} key={record.id} style={styleObj}>
            <img src={record.fields.photo[0].url} alt={record.fields.recipe} />
            <p>{record.fields.recipe}</p>
          </a>
        ))
      ) : (
        <p>Fetching Data...</p>
      )}
    </div>
  );

};

export default Recipes;