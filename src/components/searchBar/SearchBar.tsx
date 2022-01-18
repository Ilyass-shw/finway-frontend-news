import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "./SearchBarStyles";

interface SearchBarProps {
  updateTopic: (topic: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ updateTopic }) => {
  const [text, setText] = useState("");
  const onChange = (textValue: string) => setText(textValue);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for news"
        style={styles.input}
        onChangeText={onChange}
        value={text}
        onSubmitEditing={() => {
          updateTopic(text);
          setText("");
        }}
      />
    </View>
  );
};
export default SearchBar;
