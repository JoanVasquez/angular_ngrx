export default labels => {
  return {
    home: {
      label: labels.home,
      path: '/home'
    },
    list: {
      label: labels.list,
      menuItems: [
        { path: '/category/list', label: labels.listCategory },
        { path: '/supplier/list', label: labels.listSupplier },
        { path: '/product/list', label: labels.listProduct }
      ]
    },
    create: {
      label: labels.create,
      menuItems: [
        { path: '/category/new', label: labels.createCategory },
        { path: '/supplier/new', label: labels.createSupplier },
        { path: '/product/new', label: labels.createProduct }
      ]
    },
    lang: {
      label: labels.language,
      languages: [
        { code: labels.cr, lang: labels.creole },
        { code: labels.es, lang: labels.spanish },
        { code: labels.en, lang: labels.english }
      ]
    }
  };
};
