// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import body from './body';
import headline from './headline';
import links from './links';
import images from './images';
import logo from './logo';
import footer from './footer';

export default createSchema({
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    logo,
    headline,
    body,
    images,
    footer,
    links,
  ]),
})
