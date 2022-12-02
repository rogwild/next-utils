import ModalPortal from "../modal-portal";
import React, { Fragment, useEffect, useMemo, useState } from "react";

const ModalArray = ({
  showEffect = () => {},
  ArrayItem,
  array,
  getRenderCardProps,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  const modalComponentId = useMemo(() => {
    if (props.modalComponentId) {
      return props.modalComponentId;
    }
    const name = props.RenderCard.name;
    if (!name || name === `anonymous`) {
      return `component${Math.round(Math.random() * 10e5)}`;
    }
    return name;
  }, []);

  useEffect(() => {
    showEffect({ show, setShow });
  }, [ArrayItem ? show : props.show, props]);

  const showCurrentItem = (index) => {
    setCurrentItem(index);
    setShow(true);
  };
  const renderCardProps = getRenderCardProps(array[currentItem], currentItem);

  return (
    <>
      <ModalPortal
        modalComponentId={modalComponentId}
        renderCardProps={renderCardProps}
        setShow={setShow}
        show={show}
        {...props}
      />
      {array.map((item, index) => (
        <ArrayItem
          key={index}
          item={item}
          index={index}
          showCurrentItem={showCurrentItem}
        />
      ))}
    </>
  );
};

export default ModalArray;
