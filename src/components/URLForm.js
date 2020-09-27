import React, { useState } from 'react';
import axios from 'axios';

function URLForm() {
  const [url, setUrl] = useState('');

  const handleChange = e => {
    setUrl(e.target.value);
  }

  const handleSubmit = e => {
    e.preventdefault();
    axios.post('https://rel.ink/api/links/', url).then(res => console.log(res)).catch(res=> console.error(res.data));
  }

  return (
    <section className="url-form">
      <form id="shortly-form" autoComplete="off" onSubmit={handleSubmit}>
        <input
          id="url"
          name="url"
          className="sortly-input"
          type="url"
          placeholder="Shorten a link here..."
          value={url}
          onChange={handleChange}
        />
        <input id="submit" type="submit" value="Shorten It!" />
      </form>
    </section>
  );
}

export default URLForm;
