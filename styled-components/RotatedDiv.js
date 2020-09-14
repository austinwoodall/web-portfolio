import React from "react";
import styled from "styled-components";

const RotatedDiv = styled.div`
    width: 1000px;
    height: 150vh;
    position: absolute;
    top: -300px;
    right: -150px;
    background: #232396;
    border-radius: 1000px;
    z-index: -1;
    transform: skewX(-10deg) rotate(5deg);
`;

export default RotatedDiv;
