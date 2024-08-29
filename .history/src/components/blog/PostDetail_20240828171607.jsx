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
    <div className="post-detail-container">
      <div >
        <img
          src={post?.featuredImage?.url || ''}
          alt={post?.title || 'Post Image'}
          className="post-img"
        />
      </div>
      <div >
        <div className="flex items-center mb-8 w-full">
          <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8">
            <img
              alt={post?.author?.name || 'Author'}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
              src={post?.author?.photo?.url || ''}
            />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
              {post?.author?.name || 'Unknown Author'}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg> */}
            <span className="align-middle">{moment(post?.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post?.title || 'Untitled Post'}</h1>
        {post?.content?.raw?.children?.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
