import { Link } from "react-router-dom";
import styled from "styled-components";

interface CustomizeImage {
  width?: string;
  height?: string;
  objectfit?: "cover" | "contain";
  borderradius?: string;
}

const StyledPicture = styled.picture`
  width: 90px;
  height: 100%;
`;

const StyledImage = styled.img<
  {
    favorite?: string;
  } & CustomizeImage
>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: ${(props) => props.objectfit};
  box-sizing: border-box;
  border: ${(props) => (props.favorite ? "4px solid #c1d72f" : "none")};
  border-radius: ${(props) => props.borderradius};
`;

function Image({
  src,
  alt,
  to,
  customizeClass,
  favorite,
}: {
  src: string;
  alt: string;
  to?: string;
  customizeClass?: CustomizeImage;
  favorite?: boolean;
}) {
  return (
    <StyledPicture>
      {to ? (
        <Link to={to}>
          <StyledImage src={src} alt={alt} />
        </Link>
      ) : (
        <StyledImage
          src={src}
          alt={alt}
          width={customizeClass?.width}
          height={customizeClass?.height}
          objectfit={customizeClass?.objectfit}
          borderradius={customizeClass?.borderradius}
          favorite={favorite ? "true" : ""}
        />
      )}
    </StyledPicture>
  );
}

StyledImage.defaultProps = {
  width: "100%",
  height: "100%",
  objectfit: "contain",
  borderradius: "none",
};

export default Image;
