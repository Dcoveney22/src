import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
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


app.get("/products/:id=100", (req, res) => {
  //Do something with the data
  //LOOP= for (let i = 0; i < productArray.length; i++) {
  const idSearch = req.params.productArray[i]
    console.log(idSearch);
    res.send(idSearch);
    // }
  });

  ///test
    