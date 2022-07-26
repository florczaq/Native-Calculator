import { Text, Button, View, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native";

const MyButton = (props) => {
	return (
		<TouchableOpacity
			style={props.styles}
			onPress={() => {
				props.onClick(props.name);
			}}
		>
			<Text style={{ fontSize: 30 }}>{props.name}</Text>
		</TouchableOpacity>
	);
};

export default MyButton;
