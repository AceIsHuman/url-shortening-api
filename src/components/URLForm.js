import React from 'react';

function URLForm() {
  return (
    <section className="url-form">
      <form id="shortly-form" autoComplete="off">
        <input
          id="url"
          name="url"
          className="sortly-input"
          type="url"
          placeholder="Shorten a link here..."
        />
        <input id="submit" type="submit" value="Shorten It!" />
      </form>
    </section>
  );
}

export default URLForm;
