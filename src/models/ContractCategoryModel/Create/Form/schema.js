const schema = () => ({
  type: 'object',
  required: [],
  properties: {
    title: {
      type: 'string',
      title: 'title',
    },
    parent_id: {
      type: 'string',
      title: 'parent_category',
    },
    // alias: {
    //   type: 'string',
    //   title: 'نام لاتین',
    // },
    is_active: {
      type: 'number',
      title: 'activity',
      oneOf: [
        { const: 1, title: 'active' },
        { const: 0, title: 'inactive' },
      ],
    },
    // details: {
    //   type: 'object',
    //   title: '',
    //   properties: {
    //     selected: {
    //       type: 'number',
    //       title: 'دسته بندی منتخب',
    //       oneOf: [
    //         { const: 1, title: 'active' },
    //         { const: 0, title: 'inactive' },
    //       ],
    //       default: 0,
    //     },
    //     in_first_page: {
    //       type: 'number',
    //       title: 'نمایش ویژه در صفحه اول',
    //       oneOf: [
    //         { const: 1, title: 'active' },
    //         { const: 0, title: 'inactive' },
    //       ],
    //       default: 0,
    //     },
    //   },
    // },
  },
});

export default schema;
