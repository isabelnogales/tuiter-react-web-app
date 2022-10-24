import React from "react";
import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item";


const PostSummaryList = () => {
    return(
        <>
            <ul className="list-group">
                {
                    postsArray.map(post => {
                        return (<PostSummaryItem key={post._id} post={post}/>);
                    })
                }
            </ul>
        </>
    );
}
export default PostSummaryList;

