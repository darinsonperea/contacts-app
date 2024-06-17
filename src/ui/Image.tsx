import { Link } from "react-router-dom";

function Image({
  src,
  alt,
  to,
  customizeClass,
}: {
  src: string;
  alt: string;
  to?: string;
  customizeClass?: string;
}) {
  return (
    <picture className="w-auto h-full">
      {to ? (
        <Link to={to}>
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-contain ${customizeClass}`}
          />
        </Link>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-contain ${customizeClass}`}
        />
      )}
    </picture>
  );
}

export default Image;
