<?php
header('Access-Control-Allow-Origin', '*');
header('Access-Control-Allow-Methods',  'GET,PUT,POST,DELETE,PATCH,OPTIONS');
header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  $root = 'http://192.168.102.70';
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, "http://192.168.102.73/?rest_route=/servicios/home/afiliados");
  curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept:application/json']);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  $data = json_decode(curl_exec($ch));

  $enlaces = $data->footer->nuestras_redes[0]->enlaces;
  $footer = $data->footer;
  $legales = $data->footer->otros_enlaces[0]->enlaces;
  $portales = $data->footer->nuestros_portales[0]->enlaces;
  $filiales = $data->footer->filiales[0]->enlaces;
  $vigilado = $data->footer->vigilado;
  $menu = $data->menu;

$vartotal="
        <ul class=\"dropdown menu main-level-menu\" data-dropdown-menu>

          <li role=\"menuitem\" class=\"is-dropdown-submenu-parent opens-right\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"".$data->titulo_transacciones."\" data-is-click=\"false\">
            <a tabindex=\"0\" style=\"text-transform: uppercase;\">".$data->titulo_transacciones."</a>
            <ul class=\"menu submenu is-dropdown-submenu first-sub vertical\" data-submenu=\"\" aria-hidden=\"true\" role=\"menu\" style=\"\">
            ";
             foreach($data->url_transacciones as $trans):
               $vartotal.="
              <li role=\"menuitem\" class=\"is-submenu-item is-dropdown-submenu-item\">
                <a href=\"".$trans->enlace_externo."\" target=\"_blank\">".$trans->titulo_item."</a>
              </li>
              ";
               endforeach;
                $vartotal.="
               </ul>
          </li>
            ";
            foreach($menu as $item):
                $vartotal.="
            <li role=\"menuitem\" class=\"is-dropdown-submenu-parent opens-right\" aria-label=\"".$item->titulo."\" >
              <a href=\"".$root."/afiliados/".$item->post_name."\" style=\"text-transform: uppercase;\">".$item->titulo."</a>
              ";

               if($item->hijos):
                   $vartotal.="
                <ul class=\"menu submenu is-dropdown-submenu first-sub vertical\" data-submenu=\"\" aria-hidden=\"true\" role=\"menu\" style=\"\">
                  ";
                foreach($item->hijos as $child):
                    if($child->hijos):
                      $vartotal.="
                      <li role=\"menuitem\" class=\"is-dropdown-submenu-parent is-submenu-item is-dropdown-submenu-item opens-right\" aria-label=\"".$child->titulo."\">
                        <a href=\"".$root."/afiliados/".$item->post_name."/".$child->post_name."\">
                          ".$child->titulo."
                        </a>
                        <ul class=\"submenu is-dropdown-submenu vertical\" data-submenu=\"\" aria-hidden=\"true\" role=\"menu\">
                          ";
                           foreach($child->hijos as $sub):
                             $vartotal.="
                          <li role=\"menuitem\" class=\"is-submenu-item is-dropdown-submenu-item\">
                            <a href=\"".$root."/afiliados/".$item->post_name."/".$child->post_name."/".$sub->post_name."\">
                              ".$sub->titulo."
                            </a>
                          </li>
                            ";
                         endforeach;
                          $vartotal.="
                        </ul>
                      </li>
                        ";
                   else:
                         $vartotal.="
                      <li role=\"menuitem\" class=\"is-submenu-item is-dropdown-submenu-item\">
                        <a href=\"".$root."/afiliados/".$item->post_name."/".$child->post_name."\">
                          ".$child->titulo."
                        </a>
                      </li>
                  ";
                    endif;
                  endforeach;
                      $vartotal.="
                </ul>  ";
                 endif;
      $vartotal.="
            </li>
           ";endforeach;

           $vartotal.="
        </ul>
";

$menuxxxx["render"]= $vartotal;

$jsonmenus= json_encode($menuxxxx);
echo $jsonmenus;
?>
