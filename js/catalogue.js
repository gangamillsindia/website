// Renders the product catalogue from data/products.json.
// To add/edit products, just edit that JSON file — no code changes needed.

document.getElementById('year').textContent = new Date().getFullYear();

fetch('data/products.json')
  .then((res) => {
    if (!res.ok) throw new Error('Could not load products');
    return res.json();
  })
  .then((data) => renderCatalogue(data.categories))
  .catch((err) => {
    document.getElementById('product-catalogue').innerHTML =
      '<p class="loading">Products could not be loaded. Please refresh.</p>';
    console.error(err);
  });

function renderCatalogue(categories) {
  const root = document.getElementById('product-catalogue');
  root.innerHTML = '';

  categories.forEach((cat) => {
    const group = document.createElement('div');
    group.className = 'cat-group';

    const title = document.createElement('h3');
    title.className = 'cat-title';
    title.textContent = cat.name;
    group.appendChild(title);

    if (cat.blurb) {
      const blurb = document.createElement('p');
      blurb.className = 'cat-blurb';
      blurb.textContent = cat.blurb;
      group.appendChild(blurb);
    }

    const grid = document.createElement('div');
    grid.className = 'product-grid';

    cat.products.forEach((p) => {
      const card = document.createElement('div');
      card.className = 'product-card';

      const h4 = document.createElement('h4');
      h4.textContent = p.name;
      if (p.tag) {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = p.tag;
        h4.appendChild(tag);
      }
      card.appendChild(h4);

      if (p.desc) {
        const desc = document.createElement('p');
        desc.textContent = p.desc;
        card.appendChild(desc);
      }

      if (p.packs) {
        const pack = document.createElement('span');
        pack.className = 'pack';
        pack.textContent = 'Packs: ' + p.packs;
        card.appendChild(pack);
      }

      grid.appendChild(card);
    });

    group.appendChild(grid);
    root.appendChild(group);
  });
}
