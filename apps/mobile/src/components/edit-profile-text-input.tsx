import { Platform, StyleProp, TextInput, TextStyle, View } from "react-native";
import FontText from "./font-text";
import { gray500 } from "../utils/colors";

const EditProfileTextInput = ({
  fieldName,
  ...props
}: { fieldName: string } & React.ComponentProps<typeof TextInput>) => {
  let _style: StyleProp<TextStyle> = {};
  if (Platform.OS === "ios") {
    _style.lineHeight = 0;
  }
  // <View className="flex flex-col items-start self-stretch">
  //   <FontText className="font-medium">ADA Assistance</FontText>
  //   <FontText className="mt-4 mb-1">{user.requiresAssistance ? "Yes" : "No"}</FontText>
  //   <View className="border-b border-b-[#e5e7eb] w-full"/>
  // </View>
  return (
    <View className="flex flex-col items-start self-stretch gap-2">
      <FontText className="font-medium text-4 tracking-[0.48px]">
        {fieldName}
      </FontText>
      <TextInput
        className="mt-1 mb-1"
        {...props}
        placeholderTextColor={gray500}
        style={_style}
      />
      <View className="border-b border-b-[#e5e7eb] w-full" />
    </View>
  );
};

export default EditProfileTextInput;
