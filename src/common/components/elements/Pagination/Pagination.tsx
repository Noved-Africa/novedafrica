export default function Pagination(){
  return(
    <div className="flex justify-center my-10 bg-[#FAFFEB] w-screen py-4">
					<nav aria-label="Page navigation example">
						<ul className="list-style-none flex">
							<li>
								<a
									className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
									href="#"
									>&larr;</a>
							</li>
							<li>
								<a
									className="relative block rounded bg-black py-1.5 px-3 text-sm text-white rounded-full transition-all duration-300 hover:bg-black dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
									href="#"
									>1</a>
							</li>
							<li aria-current="page">
								<a
									className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 hover:rounded-full hover:text-white transition-all duration-300 hover:bg-black dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
									href="#"
									>2</a>
							</li>
							<li>
								<a
									className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-black hover:rounded-full hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
									href="#"
									>3</a>
							</li>
							<li>
								<a
									className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-black dark:text-white dark:hover:bg-neutral-700 hover:rounded-full hover:text-white dark:hover:text-white"
									href="#"
									>4</a>
							</li>
							<li>
								<a
									className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-black dark:text-white dark:hover:bg-neutral-700 hover:rounded-full hover:text-white dark:hover:text-white"
									href="#"
									>5</a>
							</li>
							<li>
								<a
									className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-black hover:rounded-full hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
									href="#"
									>6</a>
							</li>
							<li>
								<a
									className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-black hover:rounded-full hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
									href="#"
									>7</a>
							</li>
							<li>
								<a
									className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-black hover:rounded-full hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
									href="#"
									>8</a>
							</li>
							<li>
								<a
									className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-black hover:rounded-full hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
									href="#"
									>9</a>
							</li>
							<li>
								<a
									className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-black dark:text-white dark:hover:bg-neutral-700 hover:rounded-full hover:text-white dark:hover:text-white"
									href="#"
									>10</a>
							</li>
							<li>
								<a
									className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
									href="#"
									>&rarr;</a>
							</li>
						</ul>
					</nav>
			</div>
  )
}