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

  let idSearch = req.params.id;

      function inArray(itemIndex) {
        return itemIndex.id == idSearch;
    }
      const x = productArray.findIndex(inArray)
      console.log(x)
      if (x <= -1){
        res.send("This is not an item")
      }else {
        res.send(productArray[x])
      }
      console.log(idSearch);

  });
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
  ///test
    