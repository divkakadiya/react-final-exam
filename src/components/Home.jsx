import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_PROGRESS } from '../redux-saga/product/action/action'
import { Link } from 'react-router-dom'

const Home = () => {

    const dispatch = useDispatch()
    const { product } = useSelector(state => state.productReducer)

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PROGRESS })
    }, [])

    const finalProduct = product.filter((v) => v.avability === true).slice(0, 5)

    return (
        <>
            <div className='all'>
                {
                    finalProduct?.map((v, i) =>
                        <div className='card' key={i}>
                            <p>{v.id}</p>
                            <p>{v.product_name}</p>
                            <p>{v.des}</p>
                            <p>{v.price}</p>
                        </div>
                    )
                }
            </div>
            <Link to="/product">See All</Link>
        </>
    )
}

export default Home