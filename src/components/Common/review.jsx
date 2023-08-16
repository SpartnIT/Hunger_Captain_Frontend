import React, { useEffect, useState } from 'react'
import closeBtn from '../../assets/img/close.svg'
import heartImg from '../../assets/img/Icon awesome-heart.png'
import heartWholeImg from '../../assets/img/Icon awesome-heart-whole.png'
import thumbsDown from '../../assets/img/Icon awesome-thumbs-down.png'
import API from '../../API'

const Review = ({selectedItemId,setSelectedItemId,setShowReviews}) => {


    const api = new API()

    const [reviews,setReviews]  = useState([])
   
    useEffect(() => {
        api.getReview(selectedItemId)
        .then((reviews) => {
            setSelectedItemId(null);
            setReviews(reviews.results)
            console.log(reviews)
        })
    },[])

    const getImgReaction = (like_count) => {
        switch (like_count) {
            case 1: 
                return heartImg;
            case 2:
                return heartImg;
            case 3:
                return heartWholeImg;
            default:
                return thumbsDown;
        }
    }


    return (
        <section className="pop">
            <div className="pop-up">
                <div className="pop-all">
                    <img src={closeBtn} alt="" className="close"  onClick={() => setShowReviews(false)}/>
                    <h3 className="pop-up-head">Reviews</h3>

                    <div className="review-list">
                        {reviews && reviews.length > 0 && reviews.map((review,index) => (
                            <div key={index} className='reviews'>
                                <div className="name">
                                <img src={getImgReaction(review.like_count)} alt="like" />
                                <p>{review.name}</p>
                                </div>
                                <p>{review.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review