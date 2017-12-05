# Magento Custom Layered

Is a module for Magento thats allow to add an custom layered navigation


# Instalation

Exec this commands from your store **root path**
```sh
git submodule add https://github.com/cammino/magento-customlayered.git app/code/community/Cammino/Customlayered

cp app/code/community/Cammino/Customlayered/Cammino_Customlayered.xml app/etc/modules/

cp app/code/community/Cammino/Customlayered/app/template/custom-layered.phtml app/design/frontend/[THEME]/template/catalog/category/

cp app/code/community/Cammino/Customlayered/customlayered.js skin/frontend/[THEME]/js/
```

**you need to reference the javascript file that you add above in your theme's .xml file**
**file: app/design/frontend/[THEME]/layout/page.xml**
```xml
<action method="addItem"><type>skin_js</type><name>js/customlayered.js</name></action>
```

**and the xml config depends where your template will be rendered, example in toolbar.phtml:**
**file: app/design/frontend/[THEME]/layout/catalog.xml**
```xml
<block type="catalog/product_list_toolbar" name="product_list_toolbar" template="catalog/product/list/toolbar.phtml">
    <block type="customlayered/layer_view" name="customlayered" as="customlayered" template="catalog/category/custom-layered.phtml" />
</block>
```

**Finally manage the exibition of the layered container with class .active in css**
```css
.customlayered .customlayered-box{
    display: none;
}

.customlayered.active .customlayered-box{
    display: block;
}
```

# Additional
You can extend the funcionality using the methods below
```javascript
    // Exibe o bloco de filtros customizados
    showCustomLayered();
    
    // Esconde o bloco de filtros customizados
    closeCustomLayered();
```