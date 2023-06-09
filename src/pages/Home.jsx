import Categories from '../components/Categories';
import Banner from '../components/Banner';

function Home() {

    return (
        <main className="min-h-screen mt-12 mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <Banner />    
            <Categories />
        </main>
    )
}

export default Home