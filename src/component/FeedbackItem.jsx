import Card from "./shared/Card";
import PropTypes from "prop-types";
import { useState } from "react";
import {useContext} from "react"
import FeedbackContext from "../context/FeedbackContext";
import { FaTimes, FaEdit } from "react-icons/fa";

function FeedbackItem({ item }) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color='pink' />
            </button>
            <button onClick={() => editFeedback(item)} className='edit'>
                <FaEdit color='pink' />/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.prototype = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem;