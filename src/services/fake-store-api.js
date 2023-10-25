const FakeStoreApi = {
    fetchAllProducts: async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const result = res.json();
        return result;
    },
    HfetchProductById: async (productsId) => {
        const res = await fetch(`https://fakestoreapi.com/products/${productsId}`);
        const result = res.json();
        return result;
    },
    fetchProductsBySearchQuery: async (query) => {
        const res = await fetch('https://fakestoreapi.com/products');
        const result = res.json();
        return result.filter((products)=>products.title.toLowerCase().includes(query))
    }
}

export {FakeStoreApi}