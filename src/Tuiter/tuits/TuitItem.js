import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({
        post = {
            "userName": "ReactJS",
            "time": "2h",
            "tuit": "One of the most common problems that I run into when using Redux is trying to figure out why an action is not being captured by a reducer. For someone just getting starting with Redux, debugging this issue can be especially overwhelming because of how Redux manages data flow. So before you start pouring over configuration code, or the logic contained in your action creators and reducers, please, make sure your action types are defined and spelled correctly.",
            "image": "tesla.png",
            "handle":"@reactJS",
            "replies": 112,
            "retuits": 237,
            "likes": 324}}
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <div className="fw-bolder">{post.userName}</div>
                    <div className="wd-color-grey">{post.handle} {post.time}</div>
                    <div className="wd-color-grey ">{post.tuit}</div>
                </div>
                <div className="col-2">
                    <img width={70} height={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <div className="wd-color-grey bi bi-chat">{ post.replies}</div>
                </div>
                <div className="col-3">
                    <div className="wd-color-grey bi bi-arrow-repeat">{ post.retuits}</div>
                </div>
                <div className="col-3">
                    <div className="wd-color-grey bi bi-heart">{ post.likes}</div>
                </div>
                <div className="col-3">
                    <div className="wd-color-grey bi bi-share"></div>
                </div>

            </div>

        </li>
    );
};
export default TuitItem;


