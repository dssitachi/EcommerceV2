
function ProductDetails() {
  return (
    <section className="min-h-screen mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-6 flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            className="object-contain h-64 w-full"
            src="https://via.placeholder.com/500x500.png"
            alt="Product Image"
          />
        </div>
        <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
          <h2 className="text-lg font-bold">Product Details</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            suscipit, nunc ac aliquam suscipit, nulla turpis molestie enim,
            quis imperdiet felis ipsum vel arcu. Ut efficitur ex sed
            consectetur mattis. Sed eu felis a nibh ullamcorper iaculis.
          </p>
          <h2 className="text-lg font-bold mt-4">Product Features</h2>
          <ul className="list-disc list-inside text-gray-500">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <div className="mt-4">
            <button className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails