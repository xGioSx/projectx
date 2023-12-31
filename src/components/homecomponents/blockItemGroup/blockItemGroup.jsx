import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './blockItemGroup.css'
import { Link } from 'react-router-dom'
import { getMostDemandProducts } from '../../../store/mostdemand'

const BlockItemGroup = () => {
  const dispatch = useDispatch()
  
  const {mostDemandProducts} = useSelector((state) => state.mostDemandProducts)
  useEffect(() => {
    dispatch(getMostDemandProducts())
  }, [dispatch])

  return (
    <section className='item_conteiner'>

      <div className='left'>
        <div> <span> <b>home and <br />outdoor</b></span></div>
         <Link to='/productpage' className='source_now'>
          <button className='source_now'> source now </button>
          </Link>
      </div>

      <div className='product_all'>  
        {mostDemandProducts.map((product) => {
          return ( <div key={product.id} className='product_list'>
                    <div className='img'>  <img src={product.images} alt="" /></div>
                    <div className='info'>
                      <span title={product.description} >{product.model}</span>
                      <span>from <br />${product.price}</span>
                    </div>
                  </div>)
        })}

        
      </div>

      
      
    </section>
  )
}

export default BlockItemGroup
