import React from 'react';
import moment from 'moment';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj?.title || 'Image'}
            height={obj?.height || 'auto'}
            width={obj?.width || '100%'}
            src={obj?.src || ''}
            className="my-4"
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
    
    </>
  );
};

export default PostDetail;
