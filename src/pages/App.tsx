import React, { Component, useEffect, useState } from "react";
import { Text, Center, Stack, Box, useEventListenerMap } from '@chakra-ui/react';
import { Wanted } from './update';
import styles from '../styles/App.module.css';
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
        diff: Number(new Date(Wanted.date).getTime() - new Date().getTime()),
        days: Math.floor((new Date(Wanted.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)),
        hours: Math.floor(((new Date(Wanted.date).getTime() - new Date().getTime())/ (1000 * 60 * 60)) % 24),
        minutes: Math.floor(((new Date(Wanted.date).getTime() - new Date().getTime()) / 1000 / 60) % 60),
        seconds: Math.floor(((new Date(Wanted.date).getTime() - new Date().getTime()) / 1000) % 60)
    };
    let print:String = "";
    if(comp_.diff < 0){
        print = "Expired";
    }
    else{
        if(comp_.days < 10){
            print += "0" + String(comp_.days);
        }
        else{
            print += String(comp_.days);
        }
        print += ' : '
        if(comp_.hours < 10){
            print += "0" + String(comp_.hours);
        }
        else{
            print += String(comp_.hours);
        }
        print += ' : '
        if(comp_.minutes < 10){
            print += "0" + String(comp_.minutes);
        }
        else{
            print += String(comp_.minutes);
        }
        print += ' : '
        if (comp_.seconds < 10) {
            print += "0" + String(comp_.seconds);
        }
        else {
            print += String(comp_.seconds);
        }
    }

    return (
        <>
            <div id={styles.cen}>
                <Text id={styles.title} color="gray.500">{Wanted.event} will begin in...</Text>
                <Text id={styles.content}>{print}</Text>
            </div>
        </>
    )
}

export default App;