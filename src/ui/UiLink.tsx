import React from "react";

interface LinkProps {
  label: string;
  url: string;
  download?: boolean;
  downloadName?: string;
}

export const UiLink: React.FC<LinkProps> = ({
  label,
  url,
  download,
  downloadName,
}) => {
  if (!download) {
    return (
      <a
        className="cardLink"
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        {label}
        <span className="underline-link"></span>
      </a>
    );
  } else {
    return (
      <a
        className="cardLink"
        download={downloadName}
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        {label}
        <span className="underline-link"></span>
      </a>
    );
  }
};
