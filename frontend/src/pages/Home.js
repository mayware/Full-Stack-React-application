import { useEffect } from "react"

const Home = () => {

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/shop/store')

            const jasonData = await response.json()
        }
    }, [])

    return (
        <div className="home-page">
            <div className="store-products">
                { }
            </div>
        </div>
    );
}

export default Home;