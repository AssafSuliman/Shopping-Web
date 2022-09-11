import { useEffect, useState } from 'react'
import {Container, Button, Card, ListGroup, Form, Row, Col} from 'react-bootstrap'
import '../styles/Categories.css'
import { useLocation, useParams } from 'react-router-dom'
import { getCategories, getProductsByCategoryId } from '../DAL/api'
import ProductCard from './ProductCard'
import Footer from './Footer'

function Categories () {

  let {categoryId} = useParams()

  let [categories, setCategories] = useState([])
  let [currentCategory, setCurrentCategory] = useState(undefined)
  let [categoryProducts, setCategoryProducts] = useState([])

  async function getAllCategories () {
    categories = await getCategories()
    setCategories([...categories])
  } 

  async function getCategoryProducts (id) {
    categoryProducts = await getProductsByCategoryId(id)
    setCurrentCategory(categories.find(category => category.category_id === Number(id)))
    setCategoryProducts([...categoryProducts])
  }

  useEffect(() => {
    getAllCategories()
    getCategoryProducts(categoryId)
  }, [])

  useEffect(() => {
    getCategoryProducts(categoryId)
  }, [categoryId])

  return (
    <>
      <Row className='categoryPage'>
        <Col lg={2}>
          <ul className="list-group list-group-flush">
            {categories.map(category => 
            <li key={category.category_id} onClick={() => getCategoryProducts(category.category_id)}
             className="list-group-item categoriesList">{category.category_name}</li>)}
          </ul>
        </Col>
        <Col lg={10}>
            <h2 id="categoryTitle">{currentCategory?.category_name}</h2>
          <Container fluid className='categoryProducts'>
              {categoryProducts.map(product =>
                <ProductCard product={product}></ProductCard>)}
          </Container>
        </Col>
      </Row>
      <Footer></Footer>
    </>
   
    
  )

}

export default Categories
