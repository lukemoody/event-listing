import { ReadonlyProps } from '../../types/UtilityTypes';

type IsImageBanner = {
    src: string;
    alt: string;
};

const ImageBanner = ({ src, alt }: ReadonlyProps<IsImageBanner>) => (
    <div className="image-banner">
        <img
            className="image-banner__media"
            src={src}
            alt={alt}
        />
        <div className="image-banner__pattern-1"></div>
        <div className="image-banner__pattern-2"></div>
    </div>
);

export default ImageBanner;
