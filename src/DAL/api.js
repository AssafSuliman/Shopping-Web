const categories = [{id: 1, name: 'Work Tables'},
{id:2, name: 'Cordless and Electric Tools'},
{id:3, name: 'Hand Tools'},
{id:4, name: 'Measuring Tools'},
{id:5, name: 'Gardening Tools'}]

export const products = [{id: 1, categoryId: 2, productName:`Bosch Circular SAW 9" GKS235`,
description: `Two sights for increased cutting precision.
Base can be tilted up to 48°; sturdy, steel base plate with dual attachment 
Optimised chip removal system.`,
unitsInStock: 4, price: 130, unitsSold: 11},
{id: 2, categoryId: 2, productName: `DeWalt Reciprocating SAW DW311K-LX`,
description: `1200 Watt motor delivers increased power for heavy duty applications.
Keyless stainless steel blade clamp for quick and easy blade changes and increased reliability.
0-2,600 SPM and 28 mm stroke length for fast and efficient cutting.`,
unitsInStock: 2, price: 150, unitsSold: 9},
{id: 3, categoryId: 2, productName: `Dewalt Impact Driver`,
description: `At less than 4 in. in length, the Atomic 20V MAX* 1/4 in.
Brushless Cordless 3-Speed Impact Driver can handle tight applications like narrow cabinetry or framing without the need for an additional tool.
Though the Impact Driver is lightweight and compact in size, 
it does not sacrifice performance with its brushless motor that delivers up to 1,825 in-lb of torque 
and 3,250 rpm for driving large-diameter screws. 
Illuminate dim workspaces for enhanced visibility with the 3-LED on-board work light 
and keep your workflow consistent. Be ready for almost any fastening job with the included contractor bag,
charger, and 20V MAX* 5.0Ah battery.`,
unitsInStock: 8, price: 238, unitsSold: 2},
{id: 4, categoryId: 3, productName: `DeWalt 12" Medium Trigger Clamp`,
description: `The 12-inch medium bar clamp is versatile and easy to use. 
Its reinforced nylon body and heat-treated steel bar are strong and durable.
With 100-pounds of clamping force, 2-7/16" throat depth, 
and removable jaw pads to help reduce marring, 
this clamp was built to exceed the expectations of professional contractors.`,
unitsInStock: 25, price: 41, unitsSold: 8},
{id: 5, categoryId: 4, productName: `DeWalt 24 in Box Beam Level`,
description:`The 24" Non-Magnetic Box Beam Level is ideal to have for a variety of professions.
The level features a large cross section, block vials, magnified center vial, 
robust metal + over-mold end caps, die-cast center vial holder and a bridged center vial.`,
unitsInStock: 17, price: 23, unitsSold: 3},
{id: 6, categoryId: 5, productName: `Fiskars 28” Tree Trimmer`,
description: `Long-lasting and reliable: Steel blade stays sharp through heavy use and provides 
excellent durability for lasting value. Fiskars pruning shears and tools are built to last 
and backed by a full lifetime warranty.
Maximum power and precision: Low-friction blade coating makes cutting smooth, 
reduces gumming and enhances rust resistance; Non-slip grip handle allows for more control of clippers`,
unitsInStock: 5, price: 31, unitsSold: 5}]

const images = [{id:1, productId: 1, imageSrc: 'https://th.bing.com/th/id/OIP.clZWUJkNJDFRa1V1JaLgHgHaFj?pid=ImgDet&rs=1'},
{id:2, productId: 1, imageSrc: 'https://th.bing.com/th/id/R.b64b399d8353ed684b78af52676e0eb5?rik=XVyzepC9cPH7bg&pid=ImgRaw&r=0'},
{id:3, productId: 1, imageSrc: 'https://th.bing.com/th/id/OIP.LHgejWl56EqgpgQ887uVWAHaHa?pid=ImgDet&rs=1'},
{id:4, productId: 2, imageSrc: 'https://th.bing.com/th/id/R.d0a72f12d2f3abbc4c0de4f5fa8d50bd?rik=1XiX8I7T7s%2b2Kw&pid=ImgRaw&r=0'},
{id:5, productId: 2, imageSrc: 'https://th.bing.com/th/id/R.caad799be24b5dcba28a87e1e9acefdd?rik=gJfjPjFJ83waYw&pid=ImgRaw&r=0'},
{id:6, productId: 2, imageSrc: 'https://th.bing.com/th/id/OIP.CrIzA-PgnbS30gVSeVPeRAHaFL?pid=ImgDet&rs=1'},
{id:7, productId: 3, imageSrc: 'ProductPageImgs/drill.jpg'},
{id:8, productId: 3, imageSrc: 'ProductPageImgs/impact-driver.jpg'},
{id:9, productId: 3, imageSrc: 'ProductPageImgs/impact-driver2.jpg'},
{id:10, productId: 4, imageSrc: 'https://static.woodmagazine.com/styles/review_a_tool_search_result/s3/s3fs-public/product_images/_3770571-dwht83140-1500-1357310213.jpg'},
{id:11, productId: 4, imageSrc: 'https://cdn.monsecta.com/uploads/dewalt-clamp-sets-dwht83158-e1_1000.jpg'},
{id:12, productId: 5, imageSrc: 'https://images.thdstatic.com/productImages/85ed8fc7-bb15-4782-ac7d-e9c4995210a7/svn/dewalt-levels-dwht43025-64_600.jpg'},
{id:13, productId: 5, imageSrc: 'https://media.screwfix.com/is/image//ae235?src=ae235/7257C_P&$prodImageMedium$'},
{id:14, productId: 6, imageSrc: 'https://img.btdmp.com/10297/10297828/products/1648623724c1b62b6d8d.png'},
{id:15, productId: 6, imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/61B+8nhgWGL._UL500_.jpg'}]

const orders = [{id: 1 , productId: 1, customerId: 1}, {id:1, productId: 2, customerId:1}, {id:1, productId: 3},
{id: 2, productId: 2}, {id: 2, productId:3, customerId: 1},
{id: 3, productId: 4}, {id: 3, productId:2}, {id: 3, productId: 6}]

const customers = [{id:1, username:'Asaf45', password:'123456', firstName: 'Assaf', lastName:'Suliman',
email:'Asafaaaad2@gmail.com', address:'Moshav Ahihud Number 44',
birthday:'01/03/1996'}]

export const getCategories = () => {
    //fetch categories from server
    //return Promise.resolve(categories)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(categories), 1000)
    })    
}

export const signup = async (customer) => {
    await fetch('http://localhost:3000/customers/signup', {
        credentials: 'include',
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer)
        })
}

export const login = async (details) => {
    const response = await fetch('http://localhost:3000/customers/login', {
        credentials: 'include',
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details)
        })
    const validated = await response.json()
    return validated
}

export const logOut = async () => {
    await fetch('http://localhost:3000/customers/logout', {credentials:'include'})
    window.location.reload()

}

export const checkCustomer = async () => {
    const response = await fetch("http://localhost:3000/customers/logged", {credentials:'include'})
    const boolean = await response.json()
    return boolean
}

export const getCart = async () => {
    const response = await fetch("http://localhost:3000/cart", {credentials:'include'})
    const cart = await response.json()
    return cart
}

export const addToCart = async (product_id) => {
    const response = await fetch(`http://localhost:3000/cart/${product_id}`, {
        credentials:'include',
        method:'PUT',
    })
}

export const removeFromCart = async (productId) => {
    await fetch(`http://localhost:3000/cart/${productId}`, {
      credentials: 'include',
      method: "DELETE"
    })
    return 
}

export const getProducts = async () => {
    const response = await fetch(`http://localhost:3000/products/best-sellers`)
    const data = await response.json()
    return data
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
export const getImages = async () => {
    const response = await fetch(`http://localhost:3000/images/best-sellers`)
    const data = await response.json()
    return data
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
export const getBestSellers = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000)
    })
}
export const getOrdersById = (customerId) => {
    return new Promise((resolve, reject) => {
        const filteredOrders = []
        for(let order of orders){
            if(order.customerId === customerId){
                filteredOrders.push(order)
            }
        }
        resolve(filteredOrders)
    })

}
export const getCustomer = async () => {
    const response = await fetch(`http://localhost:3000/customers`, {credentials:'include'})
    const customer = await response.json()
    return customer

}


//component
// await getCategories()