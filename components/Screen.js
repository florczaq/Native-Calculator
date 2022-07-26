import { View, Text, StyleSheet } from "react-native";

const Screen = (props) => {
	return (
		<View style={props.styles}>
			<Text style={{ fontSize: 70 }}>
				{props.value == "" ? "0" : props.value}
			</Text>
		</View>
	);
};

export default Screen;
