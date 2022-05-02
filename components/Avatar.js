import Image from "next/image";

function Avatar({ url }) {
  return (
    <Image
      src={url}
      alt="Avatar"
      loading="lazy"
      width={40}
      height={40}
      className="rounded-full animate-bounce cursor-pointer transition duration-150 transform hover:scale-110"
    />
  );
}

export default Avatar;
