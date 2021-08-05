import React, { useRef } from 'react';
import { Icon, Message, Placeholder } from 'semantic-ui-react';
import ImageThumb from '../ImageThumb';
import './index.css';

export default ({ favorites, loading }) => {
  const listRef = useRef();

  const showIcons = favorites.length > 2;

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 500,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -500,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      {!loading && favorites.length === 0 && (
        <Message content="No contacts to show." />
      )}
      <div className="slide-container">

        {showIcons && (
        <Icon
          className="caret-cursor"
          name="caret left"
          size="huge"
          onClick={scrollLeft}
        />
        )}
        {favorites.length > 0 && (
        <div className="items-container" ref={listRef}>
          {favorites?.map((contact) => (
            <div key={contact.id} className="item-container">
              <ImageThumb
                firstName={contact.first_name}
                lastName={contact.last_name}
                src={contact.picture_url}
                style={{ width: 75, height: 75 }}
              />
              <p className="name">
                {contact.first_name}
                {' '}
                {contact.last_name}
              </p>
            </div>

          ))}

        </div>
        )}
        {loading && (

        <>
          {' '}
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        </>
        )}
        {showIcons && (
        <Icon
          className="caret-cursor"
          name="caret right"
          size="huge"
          onClick={scrollRight}
        />
        )}
      </div>
    </>
  );
};
