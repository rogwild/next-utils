import React, { useMemo, useState } from "react";
import { parseMimeType } from "../../formatters";
import useStyleRewriter from "../../hooks/use-style-rewriter";
import ReactSpringGallery from "./ReactSpringGallery";

const MediaGallery = ({
  media,
  containerClassName = "",
  galleryContainerClassName = "",
  mediaItemClassName,
  imageItemClassName,
  videoItemClassName,
  PreviousNavItemComponent,
  mediaContainerClassName,
  NextNavItemComponent,
  galleryClassName,
  MediaItemComponent,
}) => {
  const [show, setShow] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const localMedia = useMemo(() => {
    if (!media) {
      return;
    }

    return media.map((item) => {
      return { ...item, renderType: parseMimeType(item.mime).renderType };
    });
  }, [media]);

  if (!localMedia) return null;

  const srContainerClassName = useStyleRewriter(
    baseContainerClassName,
    containerClassName
  );
  const srGalleryContainerClassName = useStyleRewriter(
    baseGalleryContainerClassName,
    galleryContainerClassName
  );

  return (
    <div className={srContainerClassName}>
      {/* <div
        className={`${
          media.length > 1 ? `md:block` : `md:hidden`
        } hidden h-full `}
      >
        <div
          style={{
            width: `106px`,
            minHeight: `90px`,
          }}
          className=" md:max-h-full bg-black flex flex-col items-center py-1 rounded-10px overflow-hidden mr-5"
        >
          <div className="h-full overflow-y-scroll">
            {media.map((mediaObj, index) => (
              <div
                key={`${mediaObj.id}-${index}`}
                style={{
                  width: `90px`,
                }}
                className="cursor-pointer flex relative"
                onClick={() => setActiveSlideIndex(index)}
              >
                {mediaObj.renderType === `image` ? (
                  <img
                    className={`w-full self-center mx-auto h-auto object-contain max-h-[90px] my-1 rounded ${
                      mediaIndex === index ? `brightness-100` : `brightness-50`
                    } `}
                    src={getSocialImagePath(mediaObj, `thumbnail`)}
                  />
                ) : (
                  <div className="w-full h-auto pb-full relative overflow-hidden cursor-pointer">
                    <VideoPreview
                      url={getSocialFilePath(mediaObj)}
                      mime={mediaObj.mime}
                      className="absolute object-cover block w-full h-full max-w-full max-h-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div onClick={() => setShow(false)} className="h-full"></div>
      </div> */}
      <div className={srGalleryContainerClassName}>
        <div className="absolute w-full h-full inset-0">
          <ReactSpringGallery
            activeSlide={activeSlideIndex}
            galleryClassName={galleryClassName}
            mediaContainerClassName={mediaContainerClassName}
            mediaItemClassName={mediaItemClassName}
            imageItemClassName={imageItemClassName}
            videoItemClassName={videoItemClassName}
            PreviousNavItemComponent={PreviousNavItemComponent}
            NextNavItemComponent={NextNavItemComponent}
            MediaItemComponent={MediaItemComponent}
            setActiveSlide={setActiveSlideIndex}
            media={localMedia}
            setShow={setShow}
          />
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;

const baseContainerClassName = `
  @wh w-full
  @ht h-full
  @dy flex
  @fxd flex-row
  @ani items-center md:items-start
  @jyc justify-center
  @pn relative`;

const baseGalleryContainerClassName = `
  @dy flex
  @wh w-full
  @pn relative`;
