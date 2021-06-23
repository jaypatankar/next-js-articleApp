import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return(
        <div>
            <h1 className={headerStyles.title}><span>Webdev</span> News</h1>
            <p className={headerStyles.description}>Keep up to date with Latest News</p>
        </div>
    );
}

export default Header;