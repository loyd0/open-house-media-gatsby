import React from 'react'
import PrettyLink from './PrettyLink';
import Linked from './Linked';

export default function TweetComment() {


    const [comment, setComment ] = React.useState("")

    return (
        <>
            <textarea
                onChange={(e) => setComment(e.currentTarget.value)}
                name="comment"
                value={comment}
                placeholder="Add your comment here"
                className="w-full bg-gray-200 rounded border-primary" 
                rows="4"/> 
            <Linked  linkTo={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`@shorequal ${comment}`)}`} >Send</Linked>
        </>
    )
}
