import type { ImageOut } from "../types";
import React, { useState } from "react";
import GalleryItem from "../galleryitem";
import GalleryViewModal from "../galleryviewmodal";

type GalleryListItemProps = {
  imgData: ImageOut;
  removeBtn?: JSX.Element;
  withDescription?: boolean;
};

const GalleryListItem = ({
  imgData,
  removeBtn,
  withDescription,
}: GalleryListItemProps) => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GalleryItem imgData={imgData} onClick={() => onOpen()} />
      {isOpen ? (
        <GalleryViewModal
          isOpen={isOpen}
          prevData={imgData}
          removeBtn={removeBtn}
          withDescription={withDescription}
          onCancel={() => onClose()}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default GalleryListItem;
