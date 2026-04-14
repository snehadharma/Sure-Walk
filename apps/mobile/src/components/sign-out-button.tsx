import { TouchableOpacity } from "react-native";
import FontText from "./font-text";
import Animated from "react-native-reanimated";
import { SignOutIcon } from "phosphor-react-native";
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
import { View } from "react-native";

const SignOutButton = ({
  title,
  onPress,
  disabled = false,
  blue = false,
}: {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  blue?: boolean;
}) => {
  let color = blue ? "bg-ut-bluebonnet" : "bg-ut-burntorange";

  return (
    <AnimatedTouchable
      className={`px-4 py-3.5 rounded-full flex-col border border-[#005F86] disabled:bg-gray-300`}
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
    >
      <View className="flex-row items-center justify-center gap-2">
        <SignOutIcon color="#005F86" />
        <FontText className="text-[#005F86] text-center text-xl">
          {title}
        </FontText>
      </View>
    </AnimatedTouchable>
  );
};

export default SignOutButton;
