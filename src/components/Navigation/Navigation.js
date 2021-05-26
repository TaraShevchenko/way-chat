import NavigationItem from "./NavigationItem/NavigationItem";
import x from './Navigation.module.scss'


const Navigation = ({NavigationItems}) => {
    return (

        <div className={x.navigation}>
            {NavigationItems.map((item, index) =>
                <NavigationItem key={index}
                                icon={item.icon}
                                title={item.title}
                                href={item.href}
                />)}
        </div>
    )
}

export default Navigation