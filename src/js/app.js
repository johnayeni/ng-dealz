const generateDealCard = (deal) => {
  return `
    <div class="shop-card">
      <div class="shop-card-image">
        <img
          class="card-img"
          src="${deal.image}"
          width="100"
          height="100"
        />
      </div>
      <div class="shop-card-details">
        <h5 class="text-primary">${deal.name}</h5>
        <h4 class="text-accent">${deal.price.replace(/₦/g, '&nbsp;₦')}</h3>
        <h1 class="text-secondary">${deal.discount}</h1>
        <p>${deal.time_left}</p>
      </div>
    </div>
  `;
};

const displayDeals = (deals, container) => {
  const containerToFill = document.querySelector(`#${container}`);
  deals.map((deal) => {
    containerToFill.innerHTML = `
      ${containerToFill.innerHTML}
      ${generateDealCard(deal)}
    `;
  });
};

const fetchKongaDeals = async () => {
  const fetchUrl = 'https://ng-dealz-webscrapper.herokuapp.com/get-deals';
  const response = await fetch(fetchUrl);
  const deals = await response.json();
  displayDeals(deals, 'konga-deals');
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
};

setInterval(() => {
  fetchKongaDeals();
}, 15000);
