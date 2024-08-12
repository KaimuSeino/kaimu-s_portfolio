import { Avatar, AvatarImage } from "@/components/ui/avatar";

const MyAvatar = () => {
    return (
      <Avatar className="h-60 w-60 border">
        <AvatarImage src="/kaimu_icon.JPG" />
      </Avatar>
    );
}
 
export default MyAvatar;