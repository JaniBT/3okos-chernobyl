import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import './Gallery.css'

const Gallery = () => {
    const { t } = useTranslation()

    return (
        <>
            <header className="inside-menus-wrapper">
                <nav>
                    <Link>{t("nav_one")}</Link>
                    <Link>{t("menu_text")}</Link>
                </nav>
            </header>
        </>
    )
}

export default Gallery