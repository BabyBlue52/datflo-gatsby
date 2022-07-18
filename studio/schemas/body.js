export default {
    name: 'body',
    title: 'Body',
    type: 'document',
    fields: [
        {
            title: 'Label',
            name: 'label',
            type: 'string'
        },
        {   
            title: 'Body Content',
            name: 'bodyContent',
            type: 'array',
            of: [
                {
                    type: 'block',
                    title: 'Block'
                }
            ]
        }
    ]
  }