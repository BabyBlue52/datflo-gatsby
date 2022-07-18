import React, { useEffect } from 'react';
import PortableText from '@sanity/block-content-to-react';
import { graphql, useStaticQuery } from "gatsby";

const BodyContent = ({ portableTextContent }) => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allSanityBody {
          nodes {
            label
            _rawBodyContent
          }
        }
      }
    `)
    const serializers = {
        types: {
            bodyContent: props => 
            <p>{JSON.stringify(props, null, 2)}</p>
        }
    }

    const text = data.allSanityBody.nodes[1]._rawBodyContent
    return (
    <div>

        <div class="columns">
                <div class="column is-5 ">
                <div class="section is-large">
                
                </div>
                </div>
                <div class="column is-7 ">
                    <a id="who"></a>
                    <div class="section is-large">
                        <h2>{data.allSanityBody.nodes[1].label}</h2> 
                        {/* Sanity Studio does simply serialize this with Portable Text */}
                        <PortableText blocks={text} serializers={serializers}/>
                    </div>
                </div>  
            </div>
            
        <div class="block"/>
    </div>
    )
}
export default BodyContent