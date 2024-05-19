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
                    <div className="product-card">
                        <div className="product-card-inner">
                            <div className="product-image-box">
                                <img src={product.image} />
                            </div>
                            <div className="product-detail-box">
                                <p key={product._id}>{product.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;