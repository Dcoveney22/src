import express from "express";
import createHttpError from "http-errors";
const app = express();
const port = 3000;
app.use(express.json())

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

const error = new createHttpError.BadRequest("This request was unable to be processed, please try again")  
  
 

app.get("/products", (req, res)=> {
  res.send(productArray)
})

app.post("/products", (req, res) => {
    res.json({newItem: req.body});
    console.log(req.body)
    productArray.push(req.body)
    console.log(productArray)
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
 
 app.get('*', function(req, res){
    res.status(404).send(error);
  });