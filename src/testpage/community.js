import React from "react";
import { useNavigate } from 'react-router-dom';

const Community = () => {
    const navigate = useNavigate();

    const gochild = () => {
        navigate('/community/child');
    }

    return(
        <div>
            Community 입니다.
        <button onClick={gochild}>하위페이지</button>
        </div>

    )
    
    }
    
export default Community;
    