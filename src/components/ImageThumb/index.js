import React from 'react';
import { Image } from 'semantic-ui-react';
import './index.css';

export default ({
  firstName, lastName, src, style,
}) => {
  const getInitials = () => {
    if (firstName && lastName) {
      return `${firstName[0]}${lastName[0]}`;
    }
    return '';
  };

  return (
    <div>
      {src && (
        <Image className="thumbnail" circular src={src} style={style} />
      )}

      {!src && (
      <div className="thumbnail" style={style}>
        <span>{getInitials()}</span>
      </div>
      )}
    </div>
  );
};
