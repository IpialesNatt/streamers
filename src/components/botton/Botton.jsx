import { useTranslation } from "react-i18next";

function Botton(){
    const { t, i18n } = useTranslation();
    
    return (
        <button className="botton-languaje"
            onClick={() => i18n.changeLanguage(lng.code)} 
            disabled={i18n.language === lng.code}
        >
            <span class={`fi fi-${lng.country_code}`}></span>
            <span>{lng.name}</span>
        </button>
    )
}
export default Botton