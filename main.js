import express from "express";
const app = express();
const port = 3000;


  //create an array
const productArray = [{
    id: 100, productItem: 'Grapes', productQty: 6
    },
    {
    id: 200, productItem: 'Banana', productQty: 32
    },
    {
    id: 300, productItem: 'Apple', productQty: 56
    },
  ]
app.get("/products", (req, res) => {
    //send the products
    const productJSON = JSON.stringify(productArray);
    res.send(productJSON);
});

app.get("/products/:id", (req, res) => {
  //Do something with the data
  const idSearch = req.params.id;
    // for (let i = 0; i < productArray.length; i++) {
    //   if (idSearch === productArray.id[i]){
      res.send(idSearch)
      console.log(idSearch);
  //   }
  // }
  });

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
  ///test
    