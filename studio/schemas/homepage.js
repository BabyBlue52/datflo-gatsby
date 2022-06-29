export default {
        name:'homepageContent',
        type: 'document',
        title: 'Home Page Content',
        fields: [
            {
                name: 'label',
                title: 'Label',
                type: 'string'
            },
            {
                title: 'Text', 
                name: 'text',
                type: 'array', 
                of: [{type: 'block'}]
            }
        ]
}