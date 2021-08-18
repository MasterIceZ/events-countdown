import React, { Component, useEffect, useState } from "react";
import { Text, Center } from '@chakra-ui/react';
function App(){
    const calculate = () => {
        let year: number = new Date().getFullYear();
        const diff = +new Date(`2022-8-20`) - +new Date();
        let timeLeft = {};
        if (diff > 0) {
            timeLeft = {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / 1000 / 60) % 60),
                seconds: Math.floor((diff / 1000) % 60)
            };
        }
        //console.log(diff);
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculate());
    const [year] = useState(new Date().getFullYear());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculate());
        }, 1000);
    });

    const timerComp = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }
        timerComp.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });
    const comp_ = {
        days: String(Math.floor((new Date('September 1, 2021 00:00:00').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))),
        hours: String(Math.floor(((new Date('September 1, 2021 00:00:00').getTime() - new Date().getTime())/ (1000 * 60 * 60)) % 24)),
        minutes: String(Math.floor(((new Date('September 1, 2021 00:00:00').getTime() - new Date().getTime()) / 1000 / 60) % 60)),
        seconds: String(Math.floor(((new Date('September 1, 2021 00:00:00').getTime() - new Date().getTime()) / 1000) % 60))
    };
    return (
        <Center>
            <Text>
                {comp_.hours} : {comp_.minutes} : {comp_.seconds}
            </Text>
        </Center>
    )
}

export default App;