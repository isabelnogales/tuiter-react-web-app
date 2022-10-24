import React from "react";
import index from "./index.css";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="wd-color-grey">{post.topic}</div>
                    <div className="fw-bolder">{post.userName} {post.time}</div>
                    <div className="fw-bolder ">{post.title}</div>
                    <div className="wd-color-grey">{post.tweets}</div>
                </div>
                <div className="col-2">
                    <img width={70} height={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;


