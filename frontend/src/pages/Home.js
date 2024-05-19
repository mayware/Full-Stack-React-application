import { useEffect, useState } from "react"

const Home = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/shop/store')
            const jasonData = await response.json()

            if (response.ok) {
                setProducts(jasonData)
            }
        }
        fetchProducts()
    }, [])

    return (
        <div className="home-page">
            <div className="store-products">
                {products && products.map((product) => (
                    <p key={product._id}>{product.title}</p>
                ))}
            </div>
        </div>
    );
}

export default Home;