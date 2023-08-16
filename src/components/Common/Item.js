import React from 'react'
import { useDispatch } from 'react-redux'
import cartImg from '../../assets/img/cartimg.png'
import plusImg from '../../assets/img/plus.png'
import like from '../../assets/img/heart.png'
import minusImg from '../../assets/img/minus.png'
import { addCart, decreaseCart, increaseCart } from '../../reducks/carts/operations';

const Item = ({item,selected_count,setShowReviews,setSelectedItemId,setShowWriteReviews}) => {
    const dispatch = useDispatch();

    const clickAddCart = () => {
        dispatch(addCart(item))
    }

    const clickPlusCart = () => {
        dispatch(increaseCart(item))
    }

    const clickMinusCart = () => {
        dispatch(decreaseCart(item))
    }
    const checkReviews = ( ) => {
        setSelectedItemId(item.id);
        setShowReviews (true)
    }

    const checkWriteReviews = () => {
        setSelectedItemId(item.id)
        setShowWriteReviews(true)
    }


  return (
        <div className="items">
                    <img src={item.image} alt="pic" />
                    <div className="numReviews">
                        <div className='like-img'>
                            <img src={like} alt='like' style={{width:'25px'}} />
                        </div>
                        <div>({item.total_like_count})</div>
                    </div>
                    <p className="item-name">{item.name}</p>
                    <div className="review">
                        <p onClick={() => checkWriteReviews(true)}>Write Review</p>
                        <p href="" onClick={() => checkReviews(true)}>Check Reviews</p>
                    </div>
                    <div id="cart">
                        {selected_count == 0 ? (
                            <div className='add' onClick={clickAddCart}>
                                <button><img src={cartImg}/>Add To Cart</button>
                            </div>
                        ):(
                            <div className='number'>
                                <span className='plus' onClick={clickPlusCart}> <img src={plusImg}/> </span>
                                <span className='count'>{selected_count}</span>
                                <span className='minus' onClick={clickMinusCart}> <img src={minusImg}/> </span>
                            </div>
                        )}
                        <div className='price'>${item.price}</div>
                    </div>
                </div>
  )
}

export default Item