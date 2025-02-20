
import {initPlasmicLoader} from "@plasmicapp/loader-react";
import TestCMP from "./Components/TestCMP";

export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "oDcqYBEYCvFgLJjZ7ZGPe9",  // ID of a project you are using
            token: "SncND0sTB842g18c3dJ09eLzmaY2THyOMbOlDSydK93AaVjQlvH36XE2grBaWBtZqUBfC2HmSQUhJtzhLGVPw"  // API token for that project
        }
    ],
    // Fetches the latest revisions, whether or not they were unpublished!
    // Disable for production to ensure you render only published changes.
    preview: true,
});

PLASMIC.registerComponent(TestCMP, {
    name: "ProductCard",
    props: {
        // Pass in arbitrary content in the visual editing canvas
        children: 'slot',

        // You can have any number of slots.
        header: 'slot',

        // Simple scalar props
        productId: 'string',
        darkMode: 'boolean',

        // Some props can take an enum of options
        elevation: {
            type: 'choice',
            options: ['high', 'medium', 'flat']
        },

        // Some props can take an arbitrary JSON object
        config: 'object',

        // Some props can have dynamic configurations
        headerColor: {
            type: 'choice',

            // Hide the 'color' prop if no header content
            hidden: (props) => !props.header,

            // Offer different choices depending on if darkMode is on
            options: (props) => props.darkMode ? ['black', 'blue'] : ['yellow', 'green']
        }
    }
});