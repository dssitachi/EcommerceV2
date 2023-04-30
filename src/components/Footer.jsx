import { Link } from "react-router-dom"

function Footer() {
    const footerNavs = [
        { href: '#', name: 'About' },
        { href: '#', name: 'Blog' },
        { href: '#', name: 'Team' },
        { href: '#', name: 'Careers' },
        { href: '#', name: 'Support' }
    ]

    return (
        <footer className="bg-base-200 px-4 py-5 mmax-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <p className="leading-relaxed mt-2 text-sm">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <li key={idx} className="text-primary-content hover:text-primary">
                            <Link to="/">
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2023 Workspace Essentials UI All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="#">

                            </a>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="#">

                            </a>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="#">

                            </a>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="#">

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer