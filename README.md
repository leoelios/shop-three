<h1 align="center">:shirt: ThreeShop</h1>
  <p align="center">
    <a href="https://opensource.org/licenses/MIT">
       <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
    </a>
  </p>
  
## :page_with_curl: Description 
It's a fictional clothing store, the difference is in the way in which the products are presented for client. All clothes are presented in 3D (three dimensions).
However, have a possible of you add a new models 3d in store.

<p align="center">
  <img src="https://www.iphouse.com.br/blog/wp-content/uploads/2017/04/O-QUE-E-ECOMMERCE.jpg" />
</p>

## :eyes: Mandatory Dependencies
- [Node](https://nodejs.org/en/)

## :running: How run this project locally

1. In your terminal run: ```yarn```, to install all dependencies;
2. Run: ```yarn start```

## :pencil2: How add new models in system?

1. Inside archives .gltf, textures, .bin inside a folder;
2. Past the folder inside of directory: public/Model/Tshirt;
3. Get the name of folder created by you;
4. In src/data/models.js, create a new object(JSON) inside the array;
```
{
  name: "nameSetedInYourFolder",
  ctrPrice: 59.2,
  price: 39.22,
  nameDisplay: "Name displayed in website",
}
```
5. Finish! Just open the application.

## Happy coding!
