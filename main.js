const wrapper = document.querySelector('.wrapper')

fetch('https://fakestoreapi.com/products')
  .then((res) => {
    if (!res.ok) throw new Error(`Not Found - Error ${res.status}`)
    return res.json()
  })
  .then((data) => renderData(data))
  .catch((error) => console.log(error.message))

function renderData(products) {
  products.forEach(product => {
    const html = `
    <p>${product.id}</p>
    <p>${product.title}</p>
    <p>${product.price.toLocaleString('bn-BD', { style: 'currency', currency: 'BDT' })}</p>
    <p>${product.description}</p>
    `;
    wrapper.insertAdjacentHTML('beforebegin', html)
  });
}
