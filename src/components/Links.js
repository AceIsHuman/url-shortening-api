import React from 'react';

function Links(props) {
  return (
    <div className="links-container">
      {props.links.map(link => {
        return <Link link={link} />;
      })}
    </div>
  );
}

function Link(props) {
  return (
    <div className="link-card">
      <span className="full-url">{props.link.url}</span>
      <div className="shortly-url-container">
        <span className="shortly-url">{'https://rel.ink/' + props.link.hashid}</span>
        <button className="copy-btn">Copy</button>
      </div>
    </div>
  );
}

export default Links;
