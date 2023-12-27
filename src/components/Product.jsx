import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS } from '../redux-saga/product/action/action'

const Product = () => {
    const [sdata, setSdata] = useState("")

    const dispatch = useDispatch()
    const { product } = useSelector(state => state.productReducer)

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PROGRESS })
    }, [])

    const removeData = (id) => {
        dispatch({ type: DELETE_PRODUCT_PROGRESS, payload: id })
    }

    const finalProduct = product.filter((v) => v.avability === true)

    return (
        <>
            <input type='text' style={{ margin: "1vw auto", width: "500px", display: "block" }} onChange={(e) => setSdata(e.target.value)} placeholder='Search Your Product' />
            <div className='all'>
                {
                    finalProduct.filter((v) => {
                        return sdata.length == '' ? v : v.product_name.toLowerCase().includes(sdata.toLowerCase())
                    }).map((v, i) =>
                        <div className='card' key={i}>
                            <p>{v.id}</p>
                            <p>{v.product_name}</p>
                            <p>{v.des}</p>
                            <p>{v.price}</p>
                            <button onClick={() => removeData(v.id)}>Delete</button>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Product