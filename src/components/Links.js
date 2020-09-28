import React, { useRef } from 'react';

function Links(props) {
  return (
    <div className="links-container">
      {props.links.map(link => {
        return <Link link={link} key={link.hashid} />;
      })}
    </div>
  );
}

function Link(props) {
  const copyButton = useRef();
  const link = 'https://rel.ink/' + props.link.hashid;

  const copy = e => {
    e.preventDefault();
    navigator.clipboard.writeText(link)
      .then(() =>{
        copyButton.current.innerText = 'Copied!';
        copyButton.current.classList.add('copied-btn');
      })
  }

  return (
    <div className="link-card">
      <span className="full-url">{props.link.url}</span>
      <div className="shortly-url-container">
        <span className="shortly-url">{link}</span>
        <button className="copy-btn" ref={copyButton} onClick={copy}>Copy</button>
      </div>
    </div>
  );
}

export default Links;
