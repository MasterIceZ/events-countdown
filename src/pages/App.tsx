import React, { Component, useEffect, useState } from "react";
import {
	Text,
	Center,
	Stack,
	Box,
	useEventListenerMap,
} from "@chakra-ui/react";
import { current, next_time } from "../components/const/now";
import styles from "../styles/App.module.css";
import { sorted } from "../components/const/event";

function getTime(wanted: any) {
	const comp_ = {
		diff: Number(new Date(wanted.date).getTime() - new Date().getTime()),
		days: Math.floor(
			(new Date(wanted.date).getTime() - new Date().getTime()) /
				(1000 * 60 * 60 * 24)
		),
		hours: Math.floor(
			((new Date(wanted.date).getTime() - new Date().getTime()) /
				(1000 * 60 * 60)) %
				24
		),
		minutes: Math.floor(
			((new Date(wanted.date).getTime() - new Date().getTime()) / 1000 / 60) %
				60
		),
		seconds: Math.floor(
			((new Date(wanted.date).getTime() - new Date().getTime()) / 1000) % 60
		),
	};
	let print: String = "";
	if (comp_.diff < 0) {
		print = "Expired";
	} else {
		if (comp_.days < 10) {
			print += "0" + String(comp_.days);
		} else {
			print += String(comp_.days);
		}
		print += " : ";
		if (comp_.hours < 10) {
			print += "0" + String(comp_.hours);
		} else {
			print += String(comp_.hours);
		}
		print += " : ";
		if (comp_.minutes < 10) {
			print += "0" + String(comp_.minutes);
		} else {
			print += String(comp_.minutes);
		}
		print += " : ";
		if (comp_.seconds < 10) {
			print += "0" + String(comp_.seconds);
		} else {
			print += String(comp_.seconds);
		}
	}
	return print;
}

function App() {
	const calculate = () => {
		let year: number = new Date().getFullYear();
		const diff = +new Date(`2022-8-20`) - +new Date();
		let timeLeft = {};
		if (diff > 0) {
			timeLeft = {
				days: Math.floor(diff / (1000 * 60 * 60 * 24)),
				hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((diff / 1000 / 60) % 60),
				seconds: Math.floor((diff / 1000) % 60),
			};
		}
		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculate());
	const [year] = useState(new Date().getFullYear());
	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculate());
		}, 1000);
	});

	let current_print: String = getTime(current);
	let next_print: String = getTime(next_time);
	let print: String = "";
	let name_print: String = "";
	if(current_print === "Expired"){
		name_print = next_time.name;
		print = next_print;
	}
	else{
		name_print = current.name;
		print = current_print;
	}
	return (
		<>
			<div id={styles.cen}>
				<Text id={styles.title} color="gray.500">
					{name_print}
				</Text>
				<Text id={styles.title} color="gray.500">
					will begin in
				</Text>
				<Text id={styles.content}>{print}</Text>
			</div>
		</>
	);
}

export default App;
