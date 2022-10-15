import React, { useState } from "react";

const CopyButton = (props) => {
  const { textToCopy, CopyButtonComponent = () => {} } = props;

  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (!window.isSecureContext) {
      alert(`Copying is not supported in your browser`);

      return;
    }
    window.navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 7000);
  };

  return (
    <CopyButtonComponent {...props} onClick={handleClick} copied={copied} />
  );
};

export default CopyButton;
