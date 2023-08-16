import React, { useState } from 'react'
import closeBtn from '../../assets/img/close.svg'
import  heartImg  from '../../assets/img/Icon awesome-heart.png'
import heartWholeImg from '../../assets/img/Icon awesome-heart-whole.png'
import thumbsDown from '../../assets/img/Icon awesome-thumbs-down.png'
import API from '../../API'


const api = new API()
const WriteReview = ({selectedItemId,setSelectedItemId,setShowWriteReviews}) => {

    const [likeCount,setLikeCount] = useState(1)
    const [name,setName] = useState("")
    const [body,setBody] = useState("")

    const inputName = (e) => {
        setName(e.target.value)
    }

    const inputBody = (e) => {
        setBody(e.target.value)
    }

    const sendReview = () => {
        api.writeReview(selectedItemId,name,body,likeCount)
        .then((review) => {
            alert("Your Review has been sent.Thank you")
            setName('');
            setBody("");
            setLikeCount(1);
            setSelectedItemId(null);
            setShowWriteReviews(false)
        })
    }

    return (
        <section className="pop">
            <div className="pop-up">
                <div className="pop-all">
                        <h3 className="pop-up-head">Write Review</h3>
                        <p className="pop-up-head">Choose your thought</p>
                        <div className="btn">
                            {likeCount === 1 ? (
                                <img src={closeBtn} alt="" className="close" onClick={() => setShowWriteReviews(false)}/>
                            
                            ):(
                                <img src={heartImg} alt="" onClick={() => setLikeCount(1)}/>
                            )}
                             {likeCount === 2 ? (
                                <img src={closeBtn} alt="" className="close" onClick={() => setShowWriteReviews(false)}/>
                            
                            ):(
                                <img src={heartImg} alt="" onClick={() => setLikeCount(2)}/>
                            )}

                             {likeCount === 3 ? (
                                <img src={closeBtn} alt="" className="close" onClick={() => setShowWriteReviews(false)}/>
                            
                            ):(
                                <img src={heartWholeImg} alt="" onClick={() => setLikeCount(3)}/>
                            )}
                             {likeCount === 0 ? (
                                <img src={closeBtn} alt="" className="close" onClick={() => setShowWriteReviews(false)}/>
                            
                            ):(
                                <img src={thumbsDown} alt="" onClick={() => setLikeCount(0)}/>
                            )}
                        </div>
                        <input type="text" id="input" placeholder="Enter Your Name" onChange={inputName}/><br/>
                            <hr/>
                                <input type="text" id="input" placeholder="Enter Your Feedback/Review " onChange={inputBody}/><br/>
                                    <hr/>

                                        <button id="send" onClick={sendReview}>SEND REVIEW</button>
                                    </div>
                                </div>
                                </section>
                                )
}

                                export default WriteReview