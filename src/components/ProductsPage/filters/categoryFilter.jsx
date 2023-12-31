import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../store/categories'
import './categoryFilter.css'
import { useSearchParams } from 'react-router-dom'

const CategoryFilter = () => {
    const [show, setShow] = useState(false)
    const [seeAll, setSeeAll] = useState(false)

    const [searchParams, setSearchParams ] = useSearchParams()
    const params = Object.fromEntries([...searchParams]);

    

    const dispatch = useDispatch ()

    const {categories} = useSelector((state) => state.categories)
    useEffect(() => {
      dispatch(getCategories())

    }, [dispatch])

    const handleCategory = (id, category) => {
      setSearchParams ({
        ...params, 
        categoryId: id,
        categoryName: category,
      })
    }

  return (
    <div className='single_filter_container'>
        <div className='filter_header_container' onClick={() => (setShow(prev => !prev))}>
            <span><b>Category</b></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={show? '' : 'svg-down'} >
                <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5"/>
            </svg>
        </div>
        <div className={`filter_content ${show? 'showbrands' : ''}`}>
            <ul className={`filtes_content_ul ${seeAll? 'seeallcategories' : ''}`}>
                  {categories.map((product) => {
                        return<li  onClick={() => handleCategory(product.id, product.name)} key={product.id}>{product.name}</li>
                        })} 
            </ul>
        </div>
            <div className='see_all' style={{display: show? 'none' : 'block'}}><span onClick={() => (setSeeAll(prev => !prev))}>{seeAll? 'See All' : `Less`}</span></div>
    </div>
  )
}

export default CategoryFilter




