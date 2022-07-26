import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import MyButton from "./components/MyButton";
import Screen from "./components/Screen";
import stringMath from "string-math";

export default function App() {
	const [value, setValue] = useState("");
	const buttons = [
		"7",
		"8",
		"9",
		"+",
		"C",
		"4",
		"5",
		"6",
		"-",
		"R",
		"1",
		"2",
		"3",
		"*",
		"(",
		".",
		"0",
		"=",
		"/",
		")",
	];

	function changeValue(v) {
		switch (v) {
			case "C":
				setValue("");
				break;

			case "R":
				setValue(String(value).slice(0, -1));
				break;

			case "=":
				try {
					setValue(
						Math.round((stringMath(value) + Number.EPSILON) * 10000000) /
							10000000
					);
				} catch (e) {
					Alert.alert(
						"Something went wrong, check if expression is correct and try again."
					);
				}
				break;
			default:
				setValue(value + v);
		}
	}
	//String(stringMath(v))
	return (
		<View style={styles.container}>
			<Screen styles={styles.screen} value={value} />
			<Buttons buttons={buttons} onClick={changeValue} />
			<StatusBar backgroundColor={styles.button.backgroundColor} />
		</View>
	);
}

const Buttons = (props) => {
	return (
		<View style={styles.buttonSection}>
			{props.buttons.map((element, i) => (
				<MyButton
					key={i}
					name={element}
					styles={styles.button}
					onClick={props.onClick}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		overflow: "scroll",
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonSection: {
		width: "100%",
		height: "60%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		fontSize: 100,
	},
	screen: {
		width: "100%",
		height: "40%",
		backgroundColor: "#ececec",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#000",
		borderWidth: 1,
	},
	button: {
		justifyContent: "center",
		alignItems: "center",
		width: "20%",
		height: "25%",
		backgroundColor: "#6C7A89",
		borderColor: "#000",
		borderWidth: 0.2,
	},
});
