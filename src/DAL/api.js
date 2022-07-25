const categories = [{id: 1, name: 'Saw'},
{id:2, name: 'Cordless and Electric Tools'},
{id:3, name: 'Hand Tools'},
{id:4, name: 'Measuring Tools'},
{id:5, name: 'Gardening Tools'}]

const products = [{id: 1, categoryId: 1, productName:`Bosch Circular SAW 9" GKS235`,
description: `Two sights for increased cutting precision.
Base can be tilted up to 48°; sturdy, steel base plate with dual attachment.
Optimised chip removal system.`,
unitsInStock: 4, price: '130$'},
{id: 2, categoryId: 1, productName: `DeWalt Reciprocating SAW DW311K`,
description: `1200 Watt motor delivers increased power for heavy duty applications.
Keyless stainless steel blade clamp for quick and easy blade changes and increased reliability.
0-2,600 SPM and 28 mm stroke length for fast and efficient cutting.`,
unitsInStock: 2, price: '150$'}]

const images = [{id:1, productId: 1, imageSrc: 'https://th.bing.com/th/id/OIP.clZWUJkNJDFRa1V1JaLgHgHaFj?pid=ImgDet&rs=1'},
{id:2, productId: 1, imageSrc: 'https://th.bing.com/th/id/R.b64b399d8353ed684b78af52676e0eb5?rik=XVyzepC9cPH7bg&pid=ImgRaw&r=0'},
{id:3, productId: 1, imageSrc: 'https://th.bing.com/th/id/OIP.LHgejWl56EqgpgQ887uVWAHaHa?pid=ImgDet&rs=1'},
{id:4, productId: 2, imageSrc: 'https://th.bing.com/th/id/R.d0a72f12d2f3abbc4c0de4f5fa8d50bd?rik=1XiX8I7T7s%2b2Kw&pid=ImgRaw&r=0'},
{id:5, productId: 2, imageSrc: 'https://th.bing.com/th/id/R.caad799be24b5dcba28a87e1e9acefdd?rik=gJfjPjFJ83waYw&pid=ImgRaw&r=0'},
{id:6, productId: 2, imageSrc: 'https://th.bing.com/th/id/OIP.CrIzA-PgnbS30gVSeVPeRAHaFL?pid=ImgDet&rs=1'}]

export const getCategories = () => {
    //fetch categories from server
    //return Promise.resolve(categories)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(categories), 1000)
    })    
}
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 1000)
    })
}
export const getProductByID = (productId) => {
    return new Promise((resolve, reject) => {
        resolve(products.find(product => product.id === productId))
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve())
    })
}
export const getImages = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(images), 1000)
    })
}
export const getImagesByCategoryId = (getCategoryId) => {
    return new Promise((resolve, reject) => {
        const filteredImages = []
        for(let image of images){
            if(image.categoryId === getCategoryId){
                filteredImages.push(image.src)
            }
        }
        resolve(filteredImages)
    })
}
export const getImagesByProductId = (getProductId) => {
    return new Promise((resolve, reject) => {
        const filteredImages = []
        for (let image of images){
            if(image.productId === getProductId){
                filteredImages.push(image.imageSrc)
            }
        }
        resolve(filteredImages)
    })
}


//component
// await getCategories()