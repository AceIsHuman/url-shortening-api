import React from 'react';

function URLForm() {
  return (
    <section class="url-form">
      <form id="shortly-form" autocomplete="off">
        <input
          id="url"
          name="url"
          class="sortly-input"
          type="url"
          placeholder="Shorten a link here..."
        />
        <input type="submit" value="Shorten It!" />
      </form>
    </section>
  );
}

export default URLForm;
