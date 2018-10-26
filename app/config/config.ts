export class CONFIG {

    public static modo_http="http://";//https
    public static dominio_http="192.168.102.10"; //"leggercolombia.com"; //"192.168.102.10"; //"192.168.102.10";//"leggercolombia.com"; //
    public static api_wp_json =    CONFIG.modo_http+CONFIG.dominio_http+"/wordpress/wp-json/wp/v2/" ;
    public static api_jwt_auth =   CONFIG.modo_http+CONFIG.dominio_http+"/wordpress/wp-json/jwt-auth/v1/token" ;
    public static api_jwt_validate =   CONFIG.modo_http+CONFIG.dominio_http+"/wordpress/wp-json/jwt-auth/v1/token/validate";
    public static api_wp_legger=   CONFIG.modo_http+CONFIG.dominio_http+"/wordpress/wp-json/legger/v1/";
    public static api_lista_media= CONFIG.api_wp_json+"media/";
    public static api_get_subsidio_vivienda= CONFIG.api_wp_legger+"get_subsidio_vivienda/1/";
    public static dominio_plantilla="http://192.168.102.10/asignacionvivienda/index.php";
    public static dominio_plantilla_menu="http://192.168.102.10/asignacionvivienda/index_menu.php";

    public static url_usuario_final="http://localhost:4200/";

    public static ss_token="ss_token";
    public static ss_token_val="ss_token_val";

    public static lang_seleccione="Selecciona";
    public static listo_dato=0;

    public static root_http = "http://192.168.102.70";

}
