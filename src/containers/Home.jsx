import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../reducks/items/selector';
import { FetchItems } from '../reducks/items/operations';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import brush from '../assets/img/Brush_1_.png';
import Item from '../components/Common/Item';
import { getCarts, getSubtotal } from '../reducks/carts/selectors';
import { fetchFromLocalStorage } from '../reducks/carts/operations';
import queryString from 'query-string'
import Review from '../components/Common/review';
import WriteReview from '../components/Common/writeReview';

const Home = () => {

    const parsed = queryString.parse(window.location.search)
    const selector = useSelector((state) => state);
    const [showCart, setShowCart] = useState(false)
    const [showReviews,setShowReviews] = useState(false)
    const [showWriteReviews,setShowWriteReviews] = useState(false)
    const [selectedItemId,setSelectedItemId] = useState()
    const items = getItems(selector)
    const carts = getCarts(selector)
    const subtotal = getSubtotal(selector)
    console.log(items)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchFromLocalStorage())
        dispatch(FetchItems(parsed.category))
    }, [dispatch,parsed.category])


    const showItem = (item) => {
        let selected_count = 0;
        if (carts[item.id] && carts[item.id].selected_count) {
            selected_count = carts[item.id].selected_count;
        }

        if (showCart && carts[item.id] == undefined) {
            return;
        }
        return (
            <div>
                <Item
                    key={item.id}
                    item={item}
                    selected_count={selected_count}
                    setShowReviews = {setShowReviews}
                    setSelectedItemId={setSelectedItemId}
                    setShowWriteReviews={setShowWriteReviews}
                />
            </div>
        )
    }


    return (
        <>
            <Header />
            <section className="all-mid">
                {showCart ? (
                    <>
                        <h1>Selected Items</h1>
                        <p>Please show this to your waiter</p>
                    </>
                ) : (
                    <>
                        <div className="start">
                            <h3 className="start-title">Our Most Popular Recipes</h3>
                            <img className="brush" src={brush} alt="" />
                            <p>Try our Most Delicious food and it usually takes minutes to deliver!</p>
                        </div>

                        <div className="btns">
                            <a className='buttons' href='/'>All</a>
                            <a className='buttons' href='/?category=Hot'>HOT</a>
                            <a className='buttons' href='/?category=Cold'>Cold</a>
                            <a className='buttons bagel' href='/?category=Bagel'>Bagel</a>
                            
                        </div>
                        </>
                        )}
                        <div className='menu'>
                            {items && items.length > 0 && items.map((item) => showItem(item))}
                        </div>
                
            </section>

            <Footer 
            price ={subtotal}
            showCart={showCart}
            setShowCart={setShowCart}
            />
            <div className='review'>
            {showReviews &&(
               <Review
               selectedItemId = {selectedItemId}
               setSelectedItemId={setSelectedItemId}
               setShowReviews = {setShowReviews}
               />
            )}

            {showWriteReviews && (
                <WriteReview 
                selectedItemId={selectedItemId}
                setSelectedItemId={setSelectedItemId}
                setShowWriteReviews={setShowWriteReviews} />
            )}
           </div>

        </>
    )
}

export default Home