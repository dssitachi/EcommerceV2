function Home() {

    return (
        <main className="min-h-screen mt-12 mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className="h-80 bg-primary w-full mb-6">

            </div>

            <div>
                <h3 className="text-3xl mb-2">Explore Categories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-base-200 p-4 h-80">Card 1</div>
                    <div className="bg-base-200 p-4 h-80">Card 2</div>
                    <div className="bg-base-200 p-4 h-80">Card 3</div>
                    <div className="bg-base-200 p-4 h-80">Card 4</div>
                    </div>
            </div>
        </main>
    )
}

export default Home