# Magento Custom Layered

Is a module for Magento thats allow to add an custom layered navigation


# Instalation

Exec this commands from your store **root path**
```sh
git submodule add https://github.com/cammino/magento-customlayered.git app/code/community/Cammino/Customlayered

cp app/code/community/Cammino/Customlayered/Cammino_Customlayered.xml app/etc/modules/

cp app/code/community/Cammino/Customlayered/app/template/custom-layered.phtml app/design/frontend/[THEME]/template/catalog/category/
```

**and the xml config depends where your template will be rendered, example in toolbar.phtml:**
**file: app/design/frontend/[THEME]/layout/catalog.xml**
```xml
<block type="catalog/product_list_toolbar" name="product_list_toolbar" template="catalog/product/list/toolbar.phtml">
    <block type="customlayered/layer_view" name="customlayered" as="customlayered" template="catalog/category/custom-layered.phtml" />
</block>
```