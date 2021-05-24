import x from './Header.module.scss';

const Header = () => {
    return (
        <>
            <header className={x.header}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="Header-Icon"/>
                React Way of Samurai
            </header>
        </>
    )
}

export default Header;