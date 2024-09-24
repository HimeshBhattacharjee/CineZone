import React from 'react';

function Footer() {
    return (
        <>
            <hr />
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 dark:bg-slate-900 dark:text-white">
                <nav className="grid grid-flow-col gap-4">
                    <a href='/aboutus' className="link link-hover">About Us</a>
                    <a href="/contact" className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://github.com/HimeshBhattacharjee" className="hover:scale-110" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.111.827-.26.827-.578 0-.287-.011-1.243-.017-2.25-3.338.725-4.042-1.608-4.042-1.608-.546-1.38-1.333-1.749-1.333-1.749-1.087-.742.083-.726.083-.726 1.205.085 1.838 1.236 1.838 1.236 1.07 1.83 2.807 1.3 3.49.995.108-.775.419-1.3.762-1.597-2.665-.303-5.466-1.333-5.466-5.933 0-1.313.47-2.386 1.236-3.228-.124-.303-.535-1.53.117-3.188 0 0 1.008-.322 3.301 1.227a11.563 11.563 0 013.003-.403c1.021.005 2.053.139 3.003.403 2.293-1.55 3.301-1.227 3.301-1.227.653 1.658.241 2.885.118 3.188.766.842 1.236 1.915 1.236 3.228 0 4.61-2.805 5.63-5.473 5.93.43.372.815 1.102.815 2.222 0 1.606-.015 2.91-.015 3.299 0 .319.227.694.832.578A12.014 12.014 0 0024 12.297c0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/himeshbhattacharjee/" className="hover:scale-110" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M22.225 0h-20.451c-.977 0-1.774.797-1.774 1.774v20.451c0 .977.797 1.774 1.774 1.774h20.451c.977 0 1.774-.797 1.774-1.774v-20.451c0-.977-.797-1.774-1.774-1.774zm-14.822 20.452h-3.675v-10.944h3.675v10.944zm-1.837-12.515c-1.175 0-1.98-.806-1.98-1.82 0-1.017.82-1.82 2.016-1.82 1.206 0 1.982.803 1.982 1.82 0 1.014-.787 1.82-1.98 1.82zm15.107 12.515h-3.675v-5.634c0-1.344-.475-2.261-1.672-2.261-.911 0-1.448.613-1.688 1.203-.087.21-.109.501-.109.794v6.898h-3.675s.049-11.185 0-12.313h3.675v1.748c-.005.006-.012.013-.018.019h.018v-.019c.49-.754 1.364-1.824 3.317-1.824 2.42 0 4.224 1.581 4.224 4.979v8.411z" />
                            </svg>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by CineZone</p>
                </aside>
            </footer>
        </>
    );
}

export default Footer;