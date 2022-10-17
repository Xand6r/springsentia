import Image from "next/image";

export default function RenderStyledImage({
  src,
  className = "",
  alt = "",
  onClick = () => "",
}) {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{ position: "relative" }}
    >
      <Image src={src} layout="fill" alt={alt} />
    </div>
  );
}
