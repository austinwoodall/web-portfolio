import React from "react";
import styled from "styled-components";

const RotatedDiv = styled.div`
    width: 700px;
    height: 150vh;
    position: absolute;
    top: 10;
    right: 0;
    background: #232396;
    border-radius: 30
    z-index: -1;
    transform: skewY(1deg) rotate(20deg);
`;

export default RotatedDiv;
