import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function FontAwesomeIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}