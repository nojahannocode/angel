import {PLASMIC} from "@/plasmic-init";
import AntDatePickerJalali from "@/components/Date/AntDatePickerJalali";

PLASMIC.registerComponent(AntDatePickerJalali, {
    name: "DatePickerAntJalaliInput",
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
            hidden: (props : any) => !props.header,

            // Offer different choices depending on if darkMode is on
            options: (props : any) => props.darkMode ? ['black', 'blue'] : ['yellow', 'green']
        }
    }
});