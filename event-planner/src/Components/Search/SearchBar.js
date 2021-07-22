import styles from './SearchBar.module.css'

const SearchBar = () => {
    return <div className={[styles.searchBar,"bg-white flex items-center rounded-full"].join(" ")}>
        <input 
            class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
            id="search" 
            type="text"
            placeholder="Search" />
        <div className={styles.searchBtn}>
            <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                <img src="/search.png" className={styles.searchIcon} alt="bg" />
            </button>
        </div>
    </div>
}

export default SearchBar